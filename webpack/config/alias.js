const { join } = require('path');
const { rootDir } = require('../utils/env');

const aliasItems = {
    '@src': join(rootDir, '/src/client'),
    '@img': join(rootDir, '/src/client/assets/img'),
    '@styles': join(rootDir, '/src/client/assets/styles'),
    '@components': join(rootDir, '/src/client/components'),
};

module.exports = {
    aliasItems
}