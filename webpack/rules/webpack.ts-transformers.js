const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer({
    displayName: false
});

const getCustomTransformers = () => ({ before: [styledComponentsTransformer] })

module.exports = getCustomTransformers;