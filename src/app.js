const { prepareRename } = require("./service/prepareRename");
const { prompt } = require("enquirer");
const { renameFiles, renameAndCopyFiles } = require("./service/renameFiles");
const {
  initQuestion,
  renameQuestionPrompt,
  copyQuestionPrompt,
} = require("./service/cliQuestions");

//TODO: undo rename

let directory;

(async () => {
  let answers = await prompt(initQuestion);
  directory = answers.directory.replace(/\\/g, "/");

  let renameConfig = selectGopro(answers.type);

  showRenaming(renameConfig);

  if (renameConfig.length > 0) {
    let renameQuestion = await prompt(renameQuestionPrompt);
    if (renameQuestion.rename === "yes") {
      let copyQuestion = await prompt(copyQuestionPrompt);
      if (copyQuestion.copy === "yes") {
        copyRename(renameConfig);
      } else {
        rename(renameConfig);
      }
    }
  }
})();

function selectGopro(type) {
  let renameConfig;
  switch (type) {
    case "Hero HD 2 - Hero (2018)":
      renameWrapper("Hero");
      break;

    case "Hero 6 - 8, MAX":
      renameWrapper("Hero6");
      break;

    case "Fusion":
      renameWrapper("Fusion");
      break;
    default:
      new Error("There was an Error. Please try again");
      break;
  }

  function renameWrapper(callback) {
    renameConfig = prepareRename(directory, callback);
  }
  return renameConfig;
}

function showRenaming(config) {
  config.forEach((config) => {
    console.log("Rename", config.oldFileName, "to", config.newFileName);
  });
}

function rename(renameConfig) {
  renameConfig.forEach((config) => {
    const newDirectory = directory + "/";

    const newFileName = newDirectory + config.newFileName;
    const oldFileName = newDirectory + config.oldFileName;
    renameFiles(oldFileName, newFileName);
  });
}

function copyRename(renameConfig) {
  renameConfig.forEach((config) => {
    const newDirectory = directory + "/renamedFiles/";

    const newFileName = newDirectory + config.newFileName;
    const oldFileName = directory + "/" + config.oldFileName;
    renameAndCopyFiles(newDirectory, oldFileName, newFileName);
  });
}
