const { prepareRename } = require("./service/prepareRename");
const { prompt } = require("enquirer");

//TODO: check if already renamed
//TODO: undo rename

const question = [
  {
    type: "select",
    name: "Type",
    message: "Which Gopro do you have?",
    choices: [
      { name: "Hero HD 2 - Hero (2018)", message: "Hero HD 2 - Hero (2018)" }, //<= choice object
      { name: "Hero 6 - 8, MAX", message: "Hero 6 - 8, MAX" }, //<= choice object
      { name: "Fusion", message: "Fusion" }, //<= choice object
    ],
  },
  {
    type: "input",
    name: "directory",
    message: "Enter your file directory!",
  },
];

const rename = [
  {
    type: "select",
    name: "rename",
    message: "Would you like to rename those files?",
    choices: [
      {name: "yes", message: "yes"},
      {name: "no", message: "no"},
    ]
  }
];

(async () => {
  let answers = await prompt(question);

  const directory = answers.directory.replace(/\\/g, "/");

  let renameConfig = await selectGopro(answers.Type, directory);

  showRenaming(renameConfig);
  await prompt(rename);
})();

function selectGopro(type, directory) {
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

function showRenaming(config){
  config.forEach(config => {
    console.log("Rename", config.oldFileName, "to", config.newFileName);
  });
}
