const { checkForMultiFile } = require("./checkForMultiFile");

var fs = require("fs");

function prepareRename(direcotry, fileArray, fileFunction) {
  fileArray.sort(endComparator);

  for (let file of fileArray) {
    if (checkForMultiFile(file, fileArray)) {
      const newFileName = direcotry + "/" + fileFunction(file);
      const oldFileName = direcotry + "/" + file;

      //renameFiles(oldFileName, newFileName);

      console.log("renaming: " + file + " to: " + newFileName);
    }
  }
}

function endComparator(a, b) {
  const fileA = { chapter: a.substring(2, 4), number: a.substring(4, 8) };
  const fileB = { chapter: b.substring(2, 4), number: b.substring(4, 8) };

  if (fileA.number < fileB.number) return -1;
  if (fileA.number > fileB.number) return 1;
  if (fileA.chapter === "PR") return -1;
  if (fileB.chapter === "PR") return 1;
  if (fileA.chapter < fileB.chapter) return -1;
  if (fileA.chapter > fileB.chapter) return 1;
  return 0;
}

function renameFiles(oldFileName, newFileName) {
  fs.rename(oldFileName, newFileName, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("renaming: " + file + " to: " + newFileName);
    }
  });
}

module.exports = { prepareRename };
