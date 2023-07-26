const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { devServerConfig } = require('./config');

module.exports = {
    devtool: 'eval-cheap-module-source-map',
    plugins: [new ReactRefreshWebpackPlugin()],
    devServer: devServerConfig,
};
