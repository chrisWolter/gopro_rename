var fs = require("fs");

let fileUrl = process.argv[2].replace(/\\/g, "/");
let files = fs.readdirSync(fileUrl);

//TODO: check if already renamed
//TODO: undo rename

function endComparator(a, b) {
  let returnVar = 0;
  if (a.slice(4, 8) < b.slice(4, 8)) returnVar = -1;
  if (a.slice(4, 8) > b.slice(4, 8)) returnVar = 1;
  return returnVar;
}

files.sort(endComparator);

for (let file of files) {
  checkForMultiFile(file);

  if (checkForMultiFile(file)) {
    let newFileName = fileUrl + "/" + createFileName(file);
    let oldFileName = fileUrl + "/" + file;

    fs.rename(oldFileName, newFileName, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("renaming: " + file + " to: " + newFileName);
      }
    });
  }
}

function createFileName(fileName) {
  let encoding = fileName.slice(0, 2);
  let chapter = fileName.slice(2, 4);
  let fileNumber = fileName.slice(4, 8);
  let fileType = fileName.slice(8);

  if (chapter < 10) {
    chapter = chapter.slice(1);
  }
  fileName = (
    encoding +
    "01" +
    fileNumber +
    "(" +
    chapter +
    ")" +
    fileType
  ).toString();
  return fileName;
}

function checkForMultiFile(file) {
  let rename = false;

  if (file.slice(2, 4) > 01) {
    rename = true;
  }

  if (file.slice(2, 4) == 01) {
    let fileIndex = files.indexOf(file) + 1;

    if (files.length > fileIndex) {
      if (
        files[fileIndex].slice(4, 8).toString() == file.slice(4, 8).toString()
      ) {
        rename = true;
      }
    }
  }
  return rename;
}