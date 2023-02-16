// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


// The fs.open() method takes a "flag" as the second argument, 
// if the flag is "w" for "writing", the specified file is opened for writing. 
// If the file does not exist, an empty file is created:

// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// })



// The fs.writeFile() method replaces the specified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created:

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// Update Files
// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()

// The fs.appendFile() method appends the specified content at the end of the specified file:

// ExampleGet your own Node.js Server
// Append "This is my text." to the end of the file "mynewfile1.txt":

// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });


// The fs.writeFile() method replaces the specified file and content:

// ExampleGet your own Node.js Server
// Replace the content of the file "mynewfile3.txt":

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// Delete Files
// To delete a file with the File System module,  use the fs.unlink() method.

// The fs.unlink() method deletes the specified file:
// ExampleGet your own Node.js Server
// Delete "mynewfile2.txt":

// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// Rename Files
// To rename a file with the File System module,  use the fs.rename() method.

// The fs.rename() method renames the specified file:

// ExampleGet your own Node.js Server
// Rename "mynewfile1.txt" to "myrenamedfile.txt":

// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'node-rename-manipulation.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// Events in Node.js
// Every action on a computer is an event. Like when a connection is made or a file is opened.

// Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

// ExampleGet your own Node.js Server

// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// Events Module
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

// To include the built-in Events module use the require() method.
// In addition, all event properties and methods are an instance of an EventEmitter object.
// To be able to access these properties and methods, create an EventEmitter object:

// var events = require('events');
// var eventEmitter = new events.EventEmitter();


var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');