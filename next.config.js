const withSourceMaps = require('@zeit/next-source-maps')
const withCSS = require('@zeit/next-css')

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [require('remark-abbr'), require('remark-sectionize')]
  }
})

module.exports = withCSS(
  withMDX(
    withSourceMaps(
      { pageExtensions: ["md", "mdx", "tsx"] }
    )
  )
)
