const fs = require("fs");
const path = require("path");

const glob = require("glob");
const mkdirp = require("mkdirp");
const rimraf = require("rimraf");

const readFile = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) =>
      err ? reject(err) : resolve(data)
    );
  });

const writeFile = (file, contents) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, contents, "utf8", (err) =>
      err ? reject(err) : resolve()
    );
  });

const renameFile = (source, target) =>
  new Promise((resolve, reject) => {
    fs.rename(source, target, (err) => (err ? reject(err) : resolve()));
  });

const copyFile = (source, target) =>
  new Promise((resolve, reject) => {
    let cbCalled = false;
    function done(err) {
      if (!cbCalled) {
        cbCalled = true;
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    }

    const rd = fs.createReadStream(source);
    rd.on("error", (err) => done(err));
    const wr = fs.createWriteStream(target);
    wr.on("error", (err) => done(err));
    wr.on("close", (err) => done(err));
    rd.pipe(wr);
  });

const readDir = (pattern, options) =>
  new Promise((resolve, reject) => {
    glob(pattern, options, (err, result) =>
      err ? reject(err) : resolve(result)
    );
  });

const makeDir = (name) => mkdirp(name);

const moveDir = async (source, target) => {
  const dirs = await readDir("**/*.*", {
    cwd: source,
    nosort: true,
    dot: true,
  });
  await Promise.all(
    dirs.map(async (dir) => {
      const from = path.resolve(source, dir);
      const to = path.resolve(target, dir);
      await makeDir(path.dirname(to));
      await renameFile(from, to);
    })
  );
};

const copyDir = async (source, target) => {
  const dirs = await readDir("**/*.*", {
    cwd: source,
    nosort: true,
    dot: true,
  });
  await Promise.all(
    dirs.map(async (dir) => {
      const from = path.resolve(source, dir);
      const to = path.resolve(target, dir);
      await makeDir(path.dirname(to));
      await copyFile(from, to);
    })
  );
};

const cleanDir = (pattern, options) =>
  new Promise((resolve, reject) => {
    rimraf(pattern, { glob: options }, (err, result) =>
      err ? reject(err) : resolve(result)
    );
  });

module.exports = {
  readFile,
  writeFile,
  renameFile,
  copyFile,
  readDir,
  makeDir,
  copyDir,
  moveDir,
  cleanDir,
};
