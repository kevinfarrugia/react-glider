const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "index.js": "./docs/index.js",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name]",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: { browsers: ["defaults"] },
                },
              ],
              ["@babel/preset-react", { development: true }],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "./build"),
    port: 8080,
    hot: true,
  },
};
