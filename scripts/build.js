const bundle = require("./bundle");
const clean = require("./clean");
const copy = require("./copy");
const run = require("./run");

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(clean);
  await run(copy);
  await run(bundle);
}

module.exports = build;
