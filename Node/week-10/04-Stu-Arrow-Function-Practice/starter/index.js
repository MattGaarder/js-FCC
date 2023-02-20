// 1. funnyCase makes each letter in a string the opposite case as the one before
var funnyCase = function(string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
var map = function (arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubled = map(numbers, (element) => {
  return element * 2;
});

console.log(doubled);
// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`

// --------------------------------------------------------------------------

// 3. filter lets you loop over an array and remove elements
var filter = function(arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var evenNumbers = filter(numbers, function(currentElement) {
  return currentElement % 2 === 0;
});

var evenNumbersArrow = filter(numbers, currentElement => currentElement % 2 === 0);

// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);
console.log(evenNumbersArrow)

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your netflix queue
var netflixQueue = {
  queue: [
    "Mr. Nobody",
    "The Matrix",
    "Eternal Sunshine of the Spotless Mind",
    "Fight Club"
  ],
  watchMovie: function() {
    this.queue.pop();
  },
  addMovie: function(movie) {
    this.queue.unshift(movie);
  },
  printQueue: function() {
    var list = "";
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += (this.queue.length - i) + ". " + currentMovie + "\n";
    }
    console.log(list);
  }
};

console.log("Printing movie queue!\n");
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log("\nWatched a movie!\n");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();
console.log("\nAdding a movie!\n");
netflixQueue.addMovie("Black Swan");
console.log("Printing movie queue!\n");
netflixQueue.printQueue();


// // Notes: 
// var createGreeting = function(message, name) {
//   return message + "," + name + "!";
// };

// console.log(createGreeting("What's up", "Matt"));

// var createArrowFunctionGreeting = (messagew, namew) => {
//   return messagew + ", " + namew + "!";
// };

// console.log(createArrowFunctionGreeting("yoyo", "Chicken Soop"));

// // If the function body contains only one expression, no curly braces or return
// var createShrtArrowFunctionGreeting = (messagew2, namew2) => messagew2 + ", " + namew2  + "!";

// console.log(createShrtArrowFunctionGreeting("poyo", "Chicken Seop"));

// // If an arrow function only has one parameter, we can omit the parens around the single parameter

// var greet = greeting => console.log(greeting);

// greet("happy vday");

// // If an arrow function has no parameters then in needs parens 

// var printHelloWorld = () => console.log("Hello, world");

// printHelloWorld();

// // We call arrow functions the same way as we call regular functions


// // These two functions are functionally equivalent

// var greetReg = greeting => console.log(greeting);

// function greetReg(greeting) {
//   return console.log(greeting);
// };

