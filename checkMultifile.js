function checkForMultiFile(file, fileArray) {
    let rename = false;
  
    if (file.slice(2, 4) > 01) {
      rename = true;
    }
  
    if (file.slice(2, 4) == 01) {
      let fileIndex = fileArray.indexOf(file) + 1;
  
      if (fileArray.length > fileIndex) {
        if (
          fileArray[fileIndex].slice(4, 8).toString() === file.slice(4, 8).toString()
        ) {
          rename = true;
        }
      }
    }
    return rename;
  }

  module.exports = { checkForMultiFile };