const path = require('path');

const { babelLoader } = require('./useLoaderRuleItems');

/**
 * @see https://webpack.js.org/guides/typescript/#loader
 */

const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
        configFile: "tsconfig.client.json",
        getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js')
    },
    exclude: /node_modules/,
};

/**
 * @see https://webpack.js.org/loaders/babel-loader
 */

const javascriptRule = {
    test: /\.(ts|js)x?$/,
    use: [babelLoader],
    exclude: /node_modules/,
};


/**
 * @see https://webpack.js.org/guides/asset-modules/
 */

const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
};
/**
 * @see https://webpack.js.org/guides/asset-modules/
 */

const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/inline',
};


module.exports = {
    fontsRule,
    imagesRule,
    javascriptRule,
    typescriptRule
}