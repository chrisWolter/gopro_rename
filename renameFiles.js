const { checkForMultiFile } = require("./checkMultifile");

var fs = require("fs");

function prepareRename(direcotry, fileArray, fileFunction){

  fileArray.sort(endComparator);

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
  if (a.slice(4, 8) < b.slice(4, 8)) return -1;
  if (a.slice(4, 8) > b.slice(4, 8)) return 1;
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

