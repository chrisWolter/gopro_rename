const { checkForMultiFile } = require("./checkForMultiFile");
const { createFileName } = require("./createFileName");

var fs = require("fs");
let renameConfig =[];

function prepareRename(directory, goproModel) {
  const fileArray = fs.readdirSync(directory);

  fileArray.sort(endComparator);

  for (let file of fileArray) {
    if (checkForMultiFile(file, fileArray)) {
      const newFileName = createFileName(file, goproModel);
      const oldFileName = file;

      //const newFileName = directory + "/" + createFileName(file, goproModel);
      //const oldFileName = directory + "/" + file;

      renameConfig.push({oldFileName, newFileName});
      //renameFiles(oldFileName, newFileName);
    }
  }
  return renameConfig;
}

function endComparator(a, b) {
  const fileA = { chapter: a.substring(2, 4), number: a.substring(4, 8) };
  const fileB = { chapter: b.substring(2, 4), number: b.substring(4, 8) };

  if (fileA.number < fileB.number) return -1;
  if (fileA.number > fileB.number) return 1;

  if (fileA.chapter === "PR") return -1;
  if (fileB.chapter === "PR") return 1;
  if (fileA.chapter === "BK") return -1;
  if (fileB.chapter === "BK") return 1;
  if (fileA.chapter === "FR") return -1;
  if (fileB.chapter === "FR") return 1;

  if (fileA.chapter < fileB.chapter) return -1;
  if (fileA.chapter > fileB.chapter) return 1;
  return 0;
}

module.exports = { prepareRename };
