function checkForMultiFile(file, fileArray) {
    let rename = false;
  
    if (file.substring(2, 4) > 01) {
      rename = true;
    }
  
    if (file.substring(2, 4) == 01 || file.substring(2, 4) == 'PR') {
      let fileIndex = fileArray.indexOf(file) + 1;
  
      if (fileArray.length > fileIndex) {
        if (
          fileArray[fileIndex].substring(4, 8).toString() === file.substring(4, 8).toString()
        ) {
          rename = true;
        }
      }
    }
    return rename;
  }

  module.exports = { checkForMultiFile };