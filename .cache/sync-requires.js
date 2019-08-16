const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\xampp\\htdocs\\react\\new-chessea\\src\\pages\\404.js"))),
  "component---src-pages-article-js": hot(preferDefault(require("C:\\xampp\\htdocs\\react\\new-chessea\\src\\pages\\article.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\react\\new-chessea\\src\\pages\\index.js"))),
  "component---src-pages-page-3-js": hot(preferDefault(require("C:\\xampp\\htdocs\\react\\new-chessea\\src\\pages\\page-3.js"))),
  "component---src-pages-page-4-js": hot(preferDefault(require("C:\\xampp\\htdocs\\react\\new-chessea\\src\\pages\\page-4.js")))
}

