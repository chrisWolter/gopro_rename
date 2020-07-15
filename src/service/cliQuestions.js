const initQuestion = [
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
  
  const renameQuestion = [
    {
      type: "select",
      name: "rename",
      message: "Would you like to rename those files?",
      choices: [
        {name: "yes", message: "yes"},
        {name: "no", message: "no"},
      ]
    },
  ];

  const copyQuestion = [
    {
      type: "select",
      name: "copy",
      message: "Should the renamed files copied to a new directory?",
      choices: [
        {name: "yes", message: "yes"},
        {name: "no", message: "no"},
      ]
    }
  ]

  module.exports = { initQuestion, renameQuestion, copyQuestion };