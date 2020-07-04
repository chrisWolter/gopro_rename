var fs = require("fs");

function getFiles(directory){
    
const files = fs.readdirSync(directory);

return files;
}

module.exports = { getFiles };