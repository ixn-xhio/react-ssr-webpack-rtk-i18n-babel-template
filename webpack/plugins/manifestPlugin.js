const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    manifestPlugin: new WebpackManifestPlugin({
        fileName: 'manifest.json', // Nombre del archivo de manifiesto
        publicPath: '/dist/public', // Ruta pública donde se encuentran tus activos compilados
        generate: (seed, files) => {
          const manifest = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
  
          // manifest.hola = '¡Hola Mundo!'; // Agrega la propiedad personalizada "hola"
          return manifest;
        },
    })
}
