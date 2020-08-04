const fs = require("fs");

function renameFiles(oldFileName, newFileName) {
  fs.rename(oldFileName, newFileName, (error) => {
    if (error) {
      new Error(error);
    } else {
      console.log("renamed: " + oldFileName + " to: " + newFileName);
    }
  });
}

function renameAndCopyFiles(dir, oldFile, newFile) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.copyFileSync(oldFile, newFile);
} 

module.exports = { renameFiles, renameAndCopyFiles };
