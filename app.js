const { getFiles } = require("./service/getFiles");
const { prepareRename } = require("./service/renameFiles");
const { createFileName__Hero6_Max } = require("./service/naming/createFileName__Hero6_Max");
const { createFileName__Hero_5 } = require("./service/naming/createFileName__Hero_5");
const { createFileName__Fusion } = require("./service/naming/createFileName__Fusion");

const { prompt } = require("enquirer");

let files = [];

//TODO: Refactoring
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

let init = async () => {
  let answers = await prompt(question);

  const directory = answers.directory.replace(/\\/g, "/");
  files = getFiles(directory);

  selectGopro(answers.Type, directory);
};

init();

function selectGopro(type, directory) {
  switch (type) {
    case "Hero HD 2 - Hero (2018)":
      prepareRename(directory, files, createFileName__Hero_5);
      break;

    case "Hero 6 - 8, MAX":
      prepareRename(directory, files, createFileName__Hero6_Max);
      break;

    case "Fusion":
      prepareRename(directory, files, createFileName__Fusion);
      break;
    default:
      console.log("There was an Error. Please try again");
      break;
  }
}

