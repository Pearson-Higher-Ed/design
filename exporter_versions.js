var fs = require('fs')
var yaml = require('js-yaml')
// var marked = require('marked')
var Remarkable = require('remarkable')
var md = new Remarkable('full')
var marked = function(text) { return md.render(text) }
var cheerio = require('cheerio')

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
  return $.html()
}

function blockData(block, folder, redlines) {
  if (redlines) {
    return {
      type: 'redlines',
      enabled: 1,
      fields: {
        explanation: textToRedlinesHTML(block.text)
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
          text: marked(String(block.text || ""))
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
    var sketch_file = ""
    version.downloads && version.downloads.forEach((doc) => {
      if (doc.name.indexOf('ccessib') !== -1) {
        a11y_checklist = doc.link
      }
      if (doc.name.indexOf('.sketch')) {
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
        parentId: parentIDs[component]
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
          blocks: version.blocks && version.blocks.reduce((mem, block, i) => {
            if (block.name && block.name.toLowerCase() === 'redlines') {
              intoRedlines = true
            }
            mem[`new${i+1}`] = blockData(
              block,
              `${component}-v${version.version}`,
              intoRedlines
            )
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
          }
        }
      }
    })
  })
})

fs.writeFileSync(
  'versions.json',
  JSON.stringify(versions)
)
