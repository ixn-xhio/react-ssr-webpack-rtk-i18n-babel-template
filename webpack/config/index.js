const { sassResourceItems } = require('./sassResources');
const { aliasItems } = require('./alias');
const { devServerConfig } = require('./devServer');
const entry = require('./entry');

module.exports = {
    sassResourceItems,
    aliasItems,
    devServerConfig,
    entry
}