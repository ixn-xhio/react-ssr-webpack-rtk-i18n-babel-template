const { DefinePlugin } = require('webpack');
const { isDev, isDevServer, isProd, mode } = require('../utils/env');

const config = {
    'process.env': {
        NODE_ENV: JSON.stringify(mode),
    },
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
};

module.exports = {
    definePlugin: new DefinePlugin(config)
} 