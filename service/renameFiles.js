const { checkForMultiFile } = require("./checkForMultiFile");

var fs = require("fs");

function prepareRename(direcotry, fileArray, fileFunction){

  console.log("----------------");
  console.log(fileArray);
  console.log("----------------");

  fileArray.sort(endComparator);

  console.log(fileArray);

  for (let file of fileArray) {
    if (checkForMultiFile(file, fileArray)) {
      const newFileName = direcotry + "/" + fileFunction(file);
      const oldFileName = direcotry + "/" + file;

      //renameFiles(oldFileName, newFileName);
      
      console.log("renaming: " + file + " to: " + newFileName);
    }
  };
};


function endComparator(a, b) {
  if (a.substring(4, 8) < b.substring(4, 8)) return -1;
  if (a.substring(4, 8) > b.substring(4, 8)) return 1;
  if (a.substring(4, 8) == b.substring(4, 8) && a.substring(2, 4) < b.substring(2, 4)) return -1;
  if (a.substring(4, 8) == b.substring(4, 8) && a.substring(2, 4) > b.substring(2, 4)) return 1;
  return 0;
}


function renameFiles(oldFileName, newFileName){
  fs.rename(oldFileName, newFileName, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("renaming: " + file + " to: " + newFileName);
    }
  });
}


module.exports = { prepareRename };
