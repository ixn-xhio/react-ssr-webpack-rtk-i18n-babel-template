const path = require("path");
//plugins
const plugins = require("./webpack/plugins");
const rules = require("./webpack/rules");

//utils
const { arrayFilterEmpty } = require("./webpack/utils/helper");

module.exports = {
  name: "client",
  entry: {
    client: path.resolve(__dirname, "src/client/client.tsx"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname + "/dist/public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: arrayFilterEmpty([
      rules.commonRules.javascriptRule,
      rules.commonRules.typescriptRule,
      rules.commonRules.imagesRule,
      rules.commonRules.fontsRule,
      rules.stylesRules.cssRule,
      ...rules.stylesRules.lessRules,
      ...rules.stylesRules.sassRules,
      ...rules.svgRules.svgRules,
  ]),
  },
  target: ['web', 'es5'],
  plugins: arrayFilterEmpty([
    plugins.cleanWebpackPlugin, 
    plugins.manifestPlugin
  ]),
};
