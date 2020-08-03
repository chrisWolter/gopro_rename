const fs = require("fs");
const progress = require("progress-stream");
const cliProgress = require("cli-progress");

function renameFiles(oldFileName, newFileName) {
  fs.rename(oldFileName, newFileName, (error) => {
    if (error) {
      new Error(error);
    } else {
      console.log("renaming: " + oldFileName + " to: " + newFileName);
    }
  });
}

function renameAndCopyFiles(dir, oldFile, newFile) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  console.log(oldFile);
  console.log(newFile);
  fs.copyFileSync(oldFile, newFile);
} /*
function renameAndCopyFiles(dir, oldFile, newFile) {
  const bar1 = new cliProgress.SingleBar(
    {},
    cliProgress.Presets.shades_classic
  );

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  bar1.start(100, 0);

  var stat = fs.statSync(oldFile);
  var str = progress({
    length: stat.size,
    time: 100,
  });

  str.on("progress", function (progress) {
    bar1.update(progress.percentage);
  });

  var rd = fs.createReadStream(oldFile);
  rd.on("error", function (err) {
    done(err);
  });

  var wr = fs.createWriteStream(newFile);

  wr.on("error", function (err) {
    done(err);
  });

  wr.on("close", function () {
    done("Finished");
  });

  rd.pipe(str).pipe(wr);
} */

module.exports = { renameFiles, renameAndCopyFiles };
