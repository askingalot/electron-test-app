var remote = require('remote');
var file = remote.require('./lib/file');

var editor = {};
(function(document) {
  editor.start = function() {
    var editor = document.getElementById("editor");

    file.read('./main.js')
        .then(function(content) {
          editor.innerText = content;
          editor.setAttribute("contentEditable", true);
          editor.setAttribute("class", "language-javascript");
        });
  };
}(document))
