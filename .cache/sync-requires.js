
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/tene/Development/parang-blog/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/tene/Development/parang-blog/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/tene/Development/parang-blog/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/tene/Development/parang-blog/src/pages/using-typescript.tsx")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/tene/Development/parang-blog/src/templates/blog-post.js"))
}

