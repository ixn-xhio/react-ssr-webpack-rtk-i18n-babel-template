const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  name: "client",
  entry: {
    client: path.resolve(__dirname, "src/client/client.tsx"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname + "/dist/public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.client.json",
        },
      },
    ],
  },
  target: "web",
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};
