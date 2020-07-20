function checkForMultiFile(file, fileArray) {
  let rename = false;
  const firstChapter = ["PR", "BK", "FR"];
  let fileIndex;
  const fileChapter = file.substring(2, 4);

  if (fileChapter > 01) {
    rename = true;
  }

  if (fileChapter === "01" || firstChapter.includes(fileChapter)) {
    if (fileChapter === firstChapter[1] || fileChapter === firstChapter[2]) {
      fileIndex = fileArray.indexOf(file) + 2;
    } else {
      fileIndex = fileArray.indexOf(file) + 1;
    }

    if (fileArray.length > fileIndex) {
      if (
        fileArray[fileIndex].substring(4, 8).toString() ===
        file.substring(4, 8).toString()
      ) {
        rename = true;
      }
    }
  }
  return rename;
}

function checkForAlreadyRenamed(file, fileArray) {
  const renameCheck = file.substring(8, 9).toString();
  if (renameCheck !== "_") {
    return true;
  }
  console.info("This File is already renamed. ==> ", file);
  return false;
}

module.exports = { checkForMultiFile, checkForAlreadyRenamed };
