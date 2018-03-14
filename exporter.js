// 1. Create components file
// 2. Read component IDs
// 3. Insert assets
// 4. Create versions file

var fs = require('fs')
var yaml = require('js-yaml')
var http = require('http')

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

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


// Write top level components file
var components = Object.keys(data).map(key => {
  var representative = data[key][0]
  return {
    '@model': 'EntryModel',
    attributes: {
      sectionId: 3,
      typeId: 3,
      enabled: true,
      slug: key
    },
    content: {
      title: representative.title
    }
  }
})
fs.writeFileSync(
  'components.json',
  JSON.stringify(components)
)

// Write assets to file
var assets = []
function  mtyper(type) {
  switch (type) {
    case 'wide image':
      return 'wideImage'
    case 'narrow image':
      return 'narrowImage'
  }
}
Object.values(data).forEach(versions => {
  versions.forEach((version, vi) => {
    if (!version.blocks) return

    version.blocks.forEach((block, bi) => {
      if (block.type == 'two column' && block.contents) {
        block.contents.forEach(mediaItem => {
          if (mediaItem.type.indexOf('image') === -1 &&
              mediaItem.type.indexOf('video') === -1) {
            return
          }

          var url = '/c/' +
                    version.slug +
                    '/v' +
                    version.version +
                    '/' +
                    mediaItem.src

          var req = http.request({
            hostname: 'uxframework.pearson.com',
            path: encodeURI(url),
            method: 'HEAD'
          }, res => {
            if (res.statusCode >= 300) {
              console.log(`[${res.statusCode}] ${version.title} ${version.version} ${encodeURI(url)}`)
            } else {

              assets.push({
                file: `http://uxframework.pearson.com${url}`,
                folder: slugify(version.title) + '-v' + version.version,
                caption: mediaItem.caption || '',
                mediaType: mtyper(mediaItem.type),
                border: mediaItem.border || false
              })

              if (
                vi == versions.length - 1 &&
                bi == version.blocks.length - 1
              ) {
                fs.writeFileSync(
                  'assets.json',
                  JSON.stringify(assets)
                )
              }
            }
          })

          req.on('error', function(e) {
            console.log(e, `${version.title} ${version.version} ${mediaItem.src}`)
          })
          req.end()
        })
      }
    })
  })
})
