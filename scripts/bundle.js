const webpack = require("webpack");

const webpackConfig = require("../webpack.config");

/**
 * Creates application bundles from the source files.
 */
function bundle() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }

      console.info(stats.toString(webpackConfig.stats));
      if (stats.hasErrors()) {
        return reject(new Error("Webpack compilation errors"));
      }

      return resolve();
    });
  });
}

module.exports = bundle;
