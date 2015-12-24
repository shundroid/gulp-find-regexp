// EXAMPLE (node.js)

var findregexp = require("./findregexp");
findregexp("./example/*.js", function(files) {
  console.log(files);
});