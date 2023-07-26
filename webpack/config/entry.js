const { join, resolve } = require('path');
const { rootDir } = require('../utils/env');

module.exports = {
    main: [
        resolve(rootDir, "src/client/client.tsx"),
        join(__dirname, '../utils/cleanConsoleOnHMR.js'),
    ],
};
