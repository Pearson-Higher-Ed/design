var fs = require('fs')
var yaml = require('js-yaml')
var Remarkable = require('remarkable')
var md = new Remarkable('full')
var marked = function(text) { return md.render(text) }
var cheerio = require('cheerio')
var toposort = require('toposort')

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/\.+/g, '-')           // Replace . with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// read in parent IDs
var parentIDs = JSON.parse(fs.readFileSync('./component_ids.json'))
var folderIDs = JSON.parse(fs.readFileSync('./folder_ids.json'))
var sketchFolderIDs = JSON.parse(fs.readFileSync('./folder_ids_sketch.json'))

// Create core data structure
var data = {}

var folders = fs.readdirSync('./c')
folders.forEach(folder => {
  if (folder == '.DS_Store') return

  var versions = fs.readdirSync('./c/' + folder)

  versions.forEach(version => {
    if (version.indexOf('v') !== 0) return

    try {
      var file = './c/' + folder + '/' + version + '/index.md'
      var versionData = yaml.safeLoadAll(fs.readFileSync(file))[0]
      versionData.slug = folder
    } catch (e) {
      console.log(e)
      console.log('[Error] reading file ' + file)
      return
    }
    if (data[versionData.slug]) {
      data[versionData.slug].push(versionData)
    } else {
      data[versionData.slug] = [versionData]
    }
  })
})

// Create version json file
var versions = []

function textToRedlinesHTML(text) {
  if (!text) return ''
  var $ = cheerio.load(marked(text))
  var $table = cheerio.load('<table><tbody></tbody></table>')
  $('dl').each(function() {
    var $ownTable = $table('table').clone()
    $(this).children().each(function() {
      if ($(this).is('dt')) {
        $ownTable
          .find('tbody')
          .first()
          .append(`<tr><td>${$(this).html()}</td></tr>`)
      } else if ($(this).is('dd')) {
        $(this).find('li').each(function(i) {
          if (i === 0) {
            $ownTable
              .find('tr')
              .last()
              .append(`<td>${$(this).html()}</td>`)
          } else {
            $ownTable
              .find('tbody')
              .first()
              .append(`<tr><td></td><td>${$(this).html()}</td>`)
          }
        })
      }
    })
    $(this).replaceWith($ownTable)
  })
  return $('body').html()
}

function blockData(block, folder, redlines) {
  if (redlines) {
    return {
      type: 'redlines',
      enabled: 1,
      fields: {
        explanation: textToRedlinesHTML(block.text),
        describedFeatures:
          block.redlines && block.redlines.reduce((mem, f, i) => {
            mem[`row${i+1}`] = {col1: f}
            return mem
          }, {})
      },
      related: {
        illustrations: {
          '@model': 'AssetModel',
          matchBy: 'filename',
          matchValue: block.contents && block.contents.map(item => {
            if (
              item.type.indexOf('image') !== -1 ||
              item.type.indexOf('video') !== -1
            ) {
              return item.src.split('/').pop()
            } else {
              return null
            }
          }).filter(Boolean),
          matchCriteria: {
            source: 'component_assets',
            folderId: folderIDs[folder]
          }
        }
      }
    }
  }

  switch (block.type) {
    case 'two column':
    case 'two_column':
      var baseObj = {
        type: 'twoColumn',
        enabled: 1,
        fields: {
          text: marked(String(block.text || "")),
          features: block.features && block.features.reduce((mem, f, i) => {
            mem[`row${i+1}`] = {col1: f}
            return mem
          }, {})
        }
      }

      if (block.contents && block.contents.length > 0) {
        baseObj.related = {
          media: {
            '@model': 'AssetModel',
            matchBy: 'filename',
            matchValue: block.contents.map(item => {
              if (
                item.type.indexOf('image') !== -1 ||
                item.type.indexOf('video') !== -1
              ) {
                return item.src.split('/').pop()
              } else {
                return null
              }
            }).filter(Boolean),
            matchCriteria: {
              source: 'component_assets',
              folderId: folderIDs[folder]
            }
          }
        }
      }
      return baseObj
    case 'section':
      return {
        type: 'sectionName',
        enabled: 1,
        fields: {
          nameOfSection: block.name
        }
      }
    default:
      return {}
  }
}

Object.keys(data).forEach(component => {
  data[component].forEach(version => {

    var a11y_checklist = ""
    var sketch_file = version.sketch || ""
    version.downloads && version.downloads.forEach((doc) => {
      if (doc.name.indexOf('ccessib') !== -1) {
        a11y_checklist = doc.link
      }
      if (doc.link && doc.link.indexOf('.sketch') !== -1) {
        sketch_file = doc.link
      }
    })

    var intoRedlines = false
    versions.push({
      '@model': 'EntryModel',
      attributes: {
        sectionId: 3,
        typeId: 5,
        enabled: true,
        parentId: parentIDs[component],
        // will be set by craft but adding here to build graph for topo sorting:
        _slug: slugify(`${version.title}-v${version.version}`)
      },
      content: {
        fields: {
          version: version.version,
          implementation: version.implementation,
          tagline: marked(String(version.tagline || "")),
          description: marked(String(version.description || "")),
          usageGuidelines: marked(String(version.usage_guidelines || "")),
          accessibilityChecklist: version.a11y_checklist || a11y_checklist,
          features: version.features && version.features.reduce((mem, f, i) => {
            mem[`row${i+1}`] = {col1: f}
            return mem
          }, {}),
          changelog:
            version.changelog && version.changelog.reduce((mem, chg, i) => {
              mem[`new${i+1}`] = {
                type: 'change',
                enabled: 1,
                fields: {
                  version: chg.version,
                  changes: marked(chg.changes)
                }
              }
              return mem
            }, {}),
          blocks: version.blocks && version.blocks.reduce((mem, block, i) => {
            if (block.contents && block.contents[0].type == 'code') {
              mem[`new${i+1}`] = {
                type: 'codeSnippet',
                enabled: 1,
                fields: {
                  snippetText: marked(String(block.text || "")),
                  snippetCode: block.contents[0].content
                }
              }
              return mem
            }

            if (block.contents && block.contents[0].type == 'text') {
              mem[`new${i+1}`] = {
                type: 'text',
                enabled: 1,
                fields: {
                  introText: marked(String(block.text || "")),
                  mainText: marked(String(block.contents[0].content))
                }
              }
            }

            mem[`new${i+1}`] = blockData(
              block,
              `${component}-v${version.version}`,
              intoRedlines
            )
            if (block.name && block.name.toLowerCase() === 'redlines') {
              intoRedlines = true
            }
            return mem
          }, {})
        },
        related: {
          dependencies: {
            '@model': 'EntryModel',
            matchBy: 'slug',
            matchValue: version.dependencies && version.dependencies.map(d => {
              return slugify(`${d.name}-v${d.version}`)
            })
          },
          sketchFile: {
            '@model': 'AssetModel',
            matchBy: 'filename',
            matchValue: [sketch_file.split('/').pop()],
            matchCriteria: {
              source: 'sketchFiles',
              folderId: sketchFolderIDs[`${component}-v${version.version}`]
            }
          }
        }
      }
    })
  })
})

var nodes = []
var edges = []
var versionMap = {}
versions.forEach(version => {
  versionMap[version.attributes._slug] = version
  nodes.push(version.attributes._slug)

  if (version.content.related.dependencies.matchValue) {
    version.content.related.dependencies.matchValue.forEach(dep => {
      edges.push([version.attributes._slug, dep])
    })
  }
})

var sorted = toposort.array(nodes, edges).reverse().map(k => versionMap[k])
fs.writeFileSync('versions.json', JSON.stringify(sorted.slice(0, 10)))
