const TerserJSPlugin = require('terser-webpack-plugin');
const plugins = require('./plugins');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({})],
    },
    plugins: [plugins.cleanWebpackPlugin, plugins.miniCssExtractPlugin],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
