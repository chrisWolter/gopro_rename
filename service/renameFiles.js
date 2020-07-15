var fs = require('fs');

function renameFiles(oldFileName, newFileName) {
  fs.rename(oldFileName, newFileName, (error) => {
    if (error) {
      new Error(error);
    } else {
      console.log("renaming: " + oldFileName + " to: " + newFileName);
    }
  });
}

function renameAndCopyFiles(dir, oldFile, newFile){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
console.log(oldFile);
console.log(newFile);
fs.copyFileSync(oldFile, newFile);
}
module.exports = { renameFiles, renameAndCopyFiles };