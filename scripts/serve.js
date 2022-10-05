const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const clean = require("./clean");
const copy = require("./copy");
const run = require("./run");

const webpackConfig = require("../webpack.config");

/**
 * Runs the webpack dev server.
 */
async function serve() {
  await run(clean);
  await run(copy);

  const compiler = webpack(webpackConfig);
  const devServerOptions = { ...webpackConfig.devServer, open: true };
  const server = new WebpackDevServer(devServerOptions, compiler);

  return server.start();
}

module.exports = serve;
