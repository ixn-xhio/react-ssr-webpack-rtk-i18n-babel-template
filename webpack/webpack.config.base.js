const path = require("path");
//plugins
const plugins = require("./plugins");
const rules = require("./rules");
const { entry } = require('./config');

//utils
const { arrayFilterEmpty } = require("./utils/helper");
const { rootDir, isProd, isDevServer } = require("./utils/env");
const { devServerUrl } = require("./config/devServer");

module.exports = {
  name: "client",
  entry,
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(rootDir + "/dist/public"),
    filename: "bundle.js",
    publicPath: isDevServer ? devServerUrl : '/public/',
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
  target: isDevServer ? 'web' : ['web', 'es5'],
  plugins: arrayFilterEmpty([
    plugins.cleanWebpackPlugin, 
    plugins.manifestPlugin,
    plugins.definePlugin,

  ]),
};
