### Important code that loads nvm

export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

### Code for the version we want

Matts-MacBook-Air:Buttcamp matt$  -  nvm use v16.19.0

### To find out what PID for process on the port

First, you would want to know which process is using port (3000)

sudo lsof -i :3000

this will list all PID listening on this port, once you have the PID you can terminate it with the following:

kill -9 <PID>

where you replace <PID> by the process ID, or the list of process IDs, the previous command output.



### The Node.js file system module allows you to work with the file system on your computer.

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

The code tells the computer to write "Hello World!" if anyone (e.g. a web browser) tries to access your computer on port 8080.


### What is a Module in Node.js?

Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

To include the File System module, use the require() method:

var fs = require('fs');

var http = require('http');

Now your application has access to the HTTP module, and is able to create a server:
(see code above)

Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

Read Files
The fs.readFile() method is used to read files on your computer.

Create a Node.js file that reads the HTML file, and return the content:

You can create your own modules, and easily include them in your applications.
The following example creates a module that returns a date and time object:

exports.myDateTime = function () {
  return Date();
};

Use the exports keyword to make properties and methods available outside the module file.

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


## Create files

Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()

The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

ExampleGet your own Node.js Server
Create a new file using the appendFile() method:

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:


npm 