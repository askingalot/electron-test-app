var fs = require('fs');

var file = {};
file.read = function(path) {
  var filePromise = new Promise(function (resolve, reject) {
    fs.access(path, fs.R_OK | fs.W_OK, function(err) {
      if (err) {
        reject(err);
        return;
      }

      fs.readFile(path, function(err, contents) {
        if (err) {
          reject(err);
          return;
        }

        resolve(contents);
      });
    });
  });
  return filePromise;
};

module.exports = file;
