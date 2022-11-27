const fs = require('fs')
const path = require('path')
const dir = require('node-dir')
const { siteURL } = require('./_siteConfig')

const dirPath = path.join(__dirname, '/pages')
//base url with no trailing slash
const baseUrl = siteURL
// will error if a directory is empty
const files = dir.files(dirPath, { sync: true })
//remove the dirPath from each path
const normalizedFiles = files.map((file) => {
  let cleaned = file.replace(dirPath, '')
  return cleaned.replace('.js', '/').substring(1)
})
//console.log('normalizedFiles :>> ', normalizedFiles)
//filter out ones that include _app.js, 404.js, and root index.js
let filteredFiles = normalizedFiles.filter((file) => {
  return (
    !file.includes('_app/') &&
    !file.includes('404/') &&
    !file.includes('style-guide/') &&
    file != 'index/' &&
    file != '_document/'
  )
})

//check for index files inside directories - if so remove index from path
let finalFiles = filteredFiles.map((file) => {
  const noSlash = file.replace('\\', '/')
  if (noSlash.includes('/index/')) {
    return noSlash.replace('/index/', '/')
  }
  return noSlash
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
              <loc>${baseUrl}</loc>
              <priority>1.0</priority>
            </url>
      ${finalFiles
        .map((url) => {
          return `
            <url>
              <loc>${baseUrl}/${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.8</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `
//console.log('sitemap :>> ', sitemap)
console.log(
  'The following pages will be in the sitemap - in addition to the root index page'
)
console.log('finalFiles', finalFiles)
finalFiles.forEach((file) => {
  console.log('path :>> ', `${baseUrl}/${file}`)
})
console.log('Writing sitemap.xml')
fs.writeFile('out/sitemap.xml', sitemap, (err) => {
  if (err) {
    console.log('err writing xml sitemap:>> ', err)
  }
})
