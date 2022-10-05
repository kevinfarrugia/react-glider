const path = require("path");
const chokidar = require("chokidar");

const { cleanDir, copyDir, copyFile, makeDir } = require("./lib/fs");
const format = require("./lib/time");

async function copy() {
  await makeDir("build");
  await Promise.all([
    copyFile("docs/glider.css", "build/glider.css"),
    copyFile("docs/style.css", "build/style.css"),
    copyFile("docs/theme.css", "build/theme.css"),
    copyFile("docs/perspective.css", "build/perspective.css"),
    copyFile("docs/index.html", "build/index.html"),
    copyDir("docs/img", "build/img"),
  ]);

  if (process.argv.includes("--watch")) {
    const watcher = chokidar.watch(["docs/**/*"], { ignoreInitial: true });

    watcher.on("all", async (event, filePath) => {
      const start = new Date();
      const src = path.relative("./", filePath);
      const dist = path.join(
        "build/",
        src.startsWith("docs") ? path.relative("docs", src) : src
      );
      switch (event) {
        case "add":
        case "change":
          await makeDir(path.dirname(dist));
          // eslint-disable-next-line no-console
          console.log(filePath, dist);
          await copyFile(filePath, dist);
          break;
        case "unlink":
        case "unlinkDir":
          cleanDir(dist, { nosort: true, dot: true });
          break;
        default:
          return;
      }
      const end = new Date();
      const time = end.getTime() - start.getTime();
      console.info(`[${format(end)}] ${event} '${dist}' after ${time} ms`);
    });
  }
}

module.exports = copy;
