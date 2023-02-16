// var http = require('http');

//create a server object:
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(req.url); //write a response to the client
//     res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

// Split the Query String
// There are built-in modules to easily split the query string into readable parts, such as the URL module.

// ExampleGet your own Node.js Server
// Split the query string into readable parts:

// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

console.log(this);
console.log("My name in a string");

(function () {
    this.setTimeout(() => console.log("yippee"), 500);
})();
// "this" is actually an object if you view it from within a function
setTimeout(function() {console.log("hooray")}, 3000)

setTimeout(function(){
    console.log(this);
}, 3000);

// normally used to view the object this is being run
