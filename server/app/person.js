var path = require("path");

var fs = require("fs");
var data = fs.readFileSync(path.join(__dirname, "input.txt"));

console.log(data.toString());
console.log("Program Ended");

console.log(__dirname);

console.log(__filename);

setTimeout(() => {
  console.log("hello ");
}, 300);


var password =1234;