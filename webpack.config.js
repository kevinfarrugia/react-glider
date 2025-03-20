const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    "index.js": "./docs/index.tsx",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name]",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?|\.tsx?/,
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
              [
                "@babel/preset-react",
                { runtime: "automatic", development: true },
              ],
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    static: path.join(__dirname, "./build"),
    port: 8080,
    hot: true,
  },
};
