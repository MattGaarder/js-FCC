// Arrow Function Notes:
// Normal function expression/declaration 

var createGreeting = function (message, name) {
  return message + "," + name + "!";
};
console.log(createGreeting("What's up", "Matt"));

// Remove function keyword. (anonymous function used for call backs)

var createArrowFunctionGreeting = (messagew, namew) => {
  return messagew + ", " + namew + "!";
};
console.log(createArrowFunctionGreeting("yoyo", "Chicken Soop"));

// If the function body contains only one expression, no curly braces or return. Can be written on one line.

var createShrtArrowFunctionGreeting = (messagew2, namew2) => messagew2 + ", " + namew2 + "!";

console.log(createShrtArrowFunctionGreeting("poyo", "Chicken Seop"));



// If an arrow function only has one parameter, we can omit the parens around the single parameter

var greet = greeting => console.log(greeting);

greet("happy vday");

// If an arrow function has no parameters then in needs parens 

var printHelloWorld = () => console.log("Hello, world");

printHelloWorld();

// We call arrow functions the same way as we call regular functions


// These two functions are functionally equivalent

var greetReg = greeting => console.log(greeting);

function greetReg(greeting) {
  return console.log(greeting);
};

// These two functions are functionally equivalent!!

var evenNumbers = filter(numbers, function (currentElement) {
  return currentElement % 2 === 0;
});

var evenNumbersArrow = filter(numbers, currentElement => currentElement % 2 === 0);

// ONE PARAMETER, ONE LINE, AND THAT LINE GETS USED AS THE RETURN VALUE


// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);
console.log(evenNumbersArrow);


// SOME THINGS THAT ARE HANDY TO DO WITH ARROW FUNCTIONS AND METHODS

const moviePatrons = [
    { name: "Tom", age: 16 },
    { name: "Ashley", age: 31 },
    { name: "Sarah", age: 18 },
    { name: "Alvin", age: 22 },
    { name: "Cherie", age: 14 },
    { name: "Malcolm", age: 15 }
  ];
  
  // 1.
  
  // forEach is a functional way of iterating through an array without a for-loop
  
  moviePatrons.forEach(patron => console.log(patron.age));


  // The same as doing this:

  moviePatrons.forEach(function(patron) {
    return console.log(patron.age);
  })
  
  // For each iterates through the elements of an array in order

  // 2.
  
  // Filter returns a new array containing only elements whose callback returns a truthy value
  
  const canWatchRatedR = moviePatrons.filter((patron) => patron.age > 17);
  
  console.log(canWatchRatedR);
  
  // 3.
  
  // Map returns a brand new array the same length as the first. Each element is passed into the callback.
  // Whatever is returned from the callback at each iteration is what goes into that index of the new array
  
  const cardedMoviePatrons = moviePatrons.map(patron => {
    // Copy the object being iterated over
    const pObj = { ...patron };
    // Do everything else the same
    if (pObj.age >= 17) {
      pObj.canWatchRatedR = true;
    } else {
      pObj.canWatchRatedR = false;
    }
    // Be sure to return the new obj, not the parameter
    return pObj;
  });
  
  console.log("Movie Patrons: ")
  console.log(moviePatrons);
  
  console.log("\nCarded Movie Patrons: ");
  console.log(cardedMoviePatrons);