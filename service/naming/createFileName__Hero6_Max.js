function createFileName__Hero6_Max(fileName) {
    const encoding = fileName.substring(0, 2);
    let chapter = fileName.substring(2, 4);
    const fileNumber = fileName.substring(4, 8);
    const fileType = fileName.substring(8);

    if (chapter < 10) {
      chapter = chapter.substring(1);
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

  module.exports = { createFileName__Hero6_Max };