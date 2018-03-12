var fs = require('fs')
var yaml = require('js-yaml')
var marked = require('marked')

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
function blockData(block, folder) {
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
          features: version.features && version.features.reduce((mem, feature, i) => {
            mem[`row${i+1}`] = {col1: feature}
            return mem
          }, {}),
          blocks: version.blocks && version.blocks.reduce((mem, block, i) => {
            mem[`new${i+1}`] = blockData(
              block,
              `${component}-v${version.version}`
            )
            return mem
          }, {})
        },
        related: {
          dependencies: {
            '@model': 'EntryModel',
            matchBy: 'slug',
            matchValue: version.dependencies && version.dependencies.map(dep => {
              return slugify(`${dep.name}-v${dep.version}`)
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
