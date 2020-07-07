function renameFiles(oldFileName, newFileName) {
  fs.rename(oldFileName, newFileName, (error) => {
    if (error) {
      new Error(error);
    } else {
      console.log("renaming: " + file + " to: " + newFileName);
    }
  });
}

module.exports = { renameFiles };