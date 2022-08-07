var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/tene/Development/parang-blog/.yarn/__virtual__/gatsby-plugin-image-virtual-16325e35f2/0/cache/gatsby-plugin-image-npm-2.20.0-d87ea86d23-063f924c1f.zip/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/tene/Development/parang-blog/.yarn/__virtual__/gatsby-plugin-feed-virtual-61cc917f51/0/cache/gatsby-plugin-feed-npm-4.20.0-3cb2c3127f-efd01bb38d.zip/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  nodes {\n                    excerpt\n                    html\n                    fields {\n                      slug\n                    }\n                    frontmatter {\n                      title\n                      date\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"Gatsby Starter Blog RSS Feed"}]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/tene/Development/parang-blog/.yarn/__virtual__/gatsby-plugin-manifest-virtual-12dea27f5c/0/cache/gatsby-plugin-manifest-npm-4.20.0-e3cf1da64f-53ee49dc9f.zip/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/tene/Development/parang-blog/.yarn/__virtual__/gatsby-plugin-react-helmet-virtual-3ca729d4d2/0/cache/gatsby-plugin-react-helmet-npm-5.20.0-48e8769896-d028dea0aa.zip/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'partytown',
      plugin: require('/Users/tene/Development/parang-blog/.yarn/unplugged/gatsby-virtual-eefffbbbd6/node_modules/gatsby/dist/internal-plugins/partytown/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
