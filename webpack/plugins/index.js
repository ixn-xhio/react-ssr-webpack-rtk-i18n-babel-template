const { manifestPlugin } = require('./manifestPlugin');
const { cleanWebpackPlugin } = require('./pluginCleanWebpack');
const { copyPlugin } = require('./CopyPlugin');
const { definePlugin } = require('./DefinePlugin');
const { esLintPlugin } = require('./ESLintPlugin');
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