
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
};

module.exports = {
    miniCssExtractPlugin: new MiniCssExtractPlugin(config)
}
