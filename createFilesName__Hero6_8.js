function createFileName__Hero6_8(fileName) {
    const encoding = fileName.slice(0, 2);
    let chapter = fileName.slice(2, 4);
    const fileNumber = fileName.slice(4, 8);
    const fileType = fileName.slice(8);

    
  
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

  module.exports = { createFileName__Hero6_8 };