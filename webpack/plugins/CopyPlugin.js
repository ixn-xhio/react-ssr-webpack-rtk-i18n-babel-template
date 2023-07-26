const CopyPlugin = require('copy-webpack-plugin');
const { join } = require('path');
const { rootDir } = require('../utils/env');

const config = {
    patterns: [
        {
            from: join(rootDir, './src/assets'), 
            to: 'assets'
        }
    ],
};

module.exports = {
    copyPlugin: new CopyPlugin(config)
} 
