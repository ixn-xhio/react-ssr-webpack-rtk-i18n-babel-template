const  { merge } = require('webpack-merge');
const baseConfig = require('./webpack/webpack.config.base');
const devConfig = require('./webpack/webpack.config.dev');
const prodConfig = require('./webpack/webpack.config.prod');
const { isProd } = require('./webpack/utils/env');

module.exports = () =>
    isProd ? merge(baseConfig, prodConfig) : 
        merge(baseConfig, devConfig);
