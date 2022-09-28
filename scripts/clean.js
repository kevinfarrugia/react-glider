const { cleanDir } = require("./lib/fs");

/**
 * Cleans up the output (build) directory.
 */
function clean() {
  return Promise.all([
    cleanDir("build/*", {
      nosort: true,
      dot: true,
      ignore: ["build/.git"],
    }),
  ]);
}

module.exports = clean;
