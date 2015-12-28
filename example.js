// EXAMPLE (node.js)

var findregexp = require("./findglob");
findregexp("./example/*.js").then((files) => {
  console.log(files);
});