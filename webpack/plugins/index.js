const { manifestPlugin } = require('./pluginManifest');
const { cleanWebpackPlugin } = require('./pluginCleanWebpack');
const { copyPlugin } = require('./pluginCopy');
const { definePlugin } = require('./pluginDefine');
const { esLintPlugin } = require('./pluginESLint');
const { forkTsCheckerWebpackPlugin } = require('./pluginForkTsChecker');
const { miniCssExtractPlugin } = require('./pluginMiniCssExtract');

module.exports = {
    copyPlugin,
    manifestPlugin,
    cleanWebpackPlugin,
    definePlugin,
    esLintPlugin,
    forkTsCheckerWebpackPlugin,
    miniCssExtractPlugin
};