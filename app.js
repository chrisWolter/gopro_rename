const { getFiles } = require("./getFiles");
const { prepareRename } = require("./renameFiles");
const { createFileName__Hero6_8 } = require("./createFilesName__Hero6_8");

const { prompt } = require('enquirer');

let files =[];



//TODO: Refactoring
//TODO: check if already renamed
//TODO: undo rename


const question = [
  {
    type: 'select',
    name: 'Type',
    message: 'Which Gopro do you have?',
    choices: [
      { name: 'Hero HD 2 - Hero (2018)',   message: 'Hero HD 2 - Hero (2018)',   value: '1' }, //<= choice object
      { name: 'Hero 6 - Hero 8', message: 'Hero 6 - Hero 8', value: '2' }, //<= choice object
    { name: 'MAX',  message: 'MAX',  value: '3' },
    { name: 'Fusion',  message: 'Fusion',  value: '4' },  //<= choice object
  ]
},
{
  type: 'input',
  name: 'directory',
  message: 'Enter your file directory!',
}
];

let init = async() => {
  let answers = await prompt(question);
  selectGopro(answers.Type, answers.directory.replace(/\\/g, "/"));
}

init();

function selectGopro(type, directory){
  switch (type) {
    case "Hero HD 2 - Hero (2018)":
      files = getFiles(directory);
      break;

    case "Hero 6 - Hero 8"  :
      files = getFiles(directory);
      prepareRename(directory, files, createFileName__Hero6_8);
      break;

    case "MAX":
      files = getFiles(directory);
      break;

    case "Fusion":
      files = getFiles(directory);
      break;
    default:
      console.log("There was an Error. Please try again")
      break;
  }
}



