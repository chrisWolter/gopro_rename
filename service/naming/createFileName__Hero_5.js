function createFileName__Hero_5(fileName) {
    const encoding = fileName.substring(0, 2);
    let chapter = fileName.substring(2, 4);
    const fileNumber = fileName.substring(4, 8);
    const fileType = fileName.substring(8);

    if(chapter == 'PR'){
        chapter = 1;
    }else if (chapter < 10) {
        chapter = parseInt(chapter.substring(1)) + 1;
    }else {
        chapter = parseInt(chapter) + 1;
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

  module.exports = { createFileName__Hero_5 };