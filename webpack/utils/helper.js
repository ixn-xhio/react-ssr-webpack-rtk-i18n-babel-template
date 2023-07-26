const arrayFilterEmpty = (array) => array.filter((x) => !!x);

const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);

module.exports = {
    arrayFilterEmpty,
    pathRewrite
} 
