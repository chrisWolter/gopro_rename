function createFileName(fileNameOriginal, goproModel) {
  let fileNameObject = {
    encoding: fileNameOriginal.substring(0, 2),
    chapter: fileNameOriginal.substring(2, 4),
    fileNumber: fileNameOriginal.substring(4, 8),
    fileType: fileNameOriginal.substring(8),
  };
  let fileName;

  switch (goproModel) {
    case "Hero":
      fileName = prepareHero(fileNameObject);
      break;

    case "Hero6":
      fileName = prepareHero6(fileNameObject);
      break;
    case "Fusion":
      fileName = prepareFusion(fileNameObject);
    default:
      break;
  }
  return fileName;
}

function createName(fileNameObject) {
  fileName = (
    fileNameObject.encoding +
    "01" +
    fileNameObject.fileNumber +
    "_" +
    fileNameObject.chapter +
    fileNameObject.fileType
  ).toString();

  return fileName;
}

function prepareHero6(fileNameObject) {
  if (fileNameObject.chapter < 10) {
    fileNameObject.chapter = fileNameObject.chapter.substring(1);
  }
  return createName(fileNameObject);
}

function prepareHero(fileNameObject) {
  if (fileNameObject.chapter == "PR") {
    fileNameObject.encoding = "GP";
    fileNameObject.chapter = 1;
  } else if (fileNameObject.chapter < 10) {
    fileNameObject.chapter = parseInt(fileNameObject.chapter) + 1;
  } else {
    fileNameObject.chapter = parseInt(fileNameObject.chapter) + 1;
  }
  return createName(fileNameObject);
}

function prepareFusion(fileNameObject) {
  if (fileNameObject.chapter == "FR") {
    fileNameObject.encoding = "GF";
    fileNameObject.chapter = 1;
  } else if (fileNameObject.chapter == "BK") {
    fileNameObject.encoding = "GB";
    fileNameObject.chapter = 1;
  } else {
    fileNameObject.chapter = parseInt(fileNameObject.chapter) + 1;
  }

  return createName(fileNameObject);
}

module.exports = { createFileName };
