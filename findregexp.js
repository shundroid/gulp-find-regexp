var glob = require("glob");
function find(pat, filesCallback) {
  glob(pat, function(err, files) {
    if (err) console.error(err);
    filesCallback(files);
  });
}
module.exports = find;
