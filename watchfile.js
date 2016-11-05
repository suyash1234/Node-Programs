//import file system module
var fs = require("fs");
//print in console that we are starting
console.log("starting to read");
//read file synchronously and put it in contents variable
var contents = fs.readFileSync("readfile.json");
//print the contents of file in console
console.log("contents of file are:" + contents);
//parse the file usinf json
var config = JSON.parse(contents);
//print the parse file in the console
console.log("config file is:", config);
//print the successful msg in console
console.log("read file successfully");
//create a function watch file which will execute when we change the contents in json file
fs.watchFile("readfile.json", function(current, previous) {
//print the msg of config changed
    console.log("config changed");
    //read the file synchronously with changed contents
    contents = fs.readFileSync("readfile.json");
    console.log("contents of file are:" + contents);
    config = JSON.parse(contents);//parse the file
    console.log("new config file is:", config);
    console.log("new file read successfully");
});
