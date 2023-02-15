The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

var fs = require('fs');
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

Read Files
The fs.readFile() method is used to read files on your computer.

Create a Node.js file that reads the HTML file, and return the content:

ExampleGet
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);