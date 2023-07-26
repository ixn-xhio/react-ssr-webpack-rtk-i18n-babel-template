const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
    cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!profile.json',
        '!tsconfig.tsbuildinfo',
    ],
};

module.exports = {
    cleanWebpackPlugin: new CleanWebpackPlugin(config)
} 
