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
// FOR EACH RUNS ON THE ORIGINAL ARRAY:
// FILTER RETURNS ANOTHER ARRAY SMALLER THAN OR HE SAME SIZE 
// MAP RETURNS ANOTHER ARRAY OF THE SAME SIZE 


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


  // This is functionally equivalent to the next function (You see how this gets significantly shorter)

  const fiveCharPeeps = moviePatrons.filter(
    (patron) => patron.name.length === 5
  );

  const fiveCharPeepsT = moviePatrons.filter((patron) => {
    if (patron.name.length === 5) {
      return true;
    } else {
      return false;
    }
  });

  console.log(fiveCharPeepsT);

  // 3.
  
  // Map returns a brand new array the same length as the first. Each element is passed into the callback.
  // Whatever is returned from the callback at each iteration is what goes into that index of the new array
  // Functionally equivalent to this.
  // Bear and mind that some of these variables have altered names.

  const cardedMovie2 = [];
  for (let i = 0; i < moviePatrons.length; i++) {
    if (patron.age >=17) {
      cardedMovie2.push(true);
    } else {
      cardedMovie2.push(false)
    }
  }

  const cardedMoviePatrons = moviePatrons.map(patron => {
    // Copy the object being iterated over
    // Spread operator (copies every element of the array and adds a new property to it.)
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

  // Template literals. Much better way of doing the line below:

var oldFashioned = "My name is " + arya.first + "!\nI am loyal to " + arya.allegiance + ".";

  const arya = {
    first: "Arya",
    last: "Stark",
    origin: "Winterfell",
    allegiance: "House Stark"
  };

  // We can use destructuring with arrow functions to produce something like the following 

  const formalHouseName = house => `The great house ${house}`;
  // A function that takes in a string a produces a new string.
  
  const greeting = `My name is ${arya.first}!
  I am loyal to ${formalHouseName(arya.allegiance)}.`;

  // This basically demonstrates that any javascript expression can be placed within the literals, includings functions
  // They will simply be evaluated and placed into a string


  //Gets evaluated and placed in the string
  //White space is maintained.
  //Basically backtick instead of quotes. Just part of the ES6 syntax
  // Within the curly braces can be any javascript expression
  
  console.log(greeting); // prints
  // My name is Arya!
  // I am loyal to House Stark.

const pie = 'apple';
const predictable = () => 1;
// module.exports is an object we use to store variables or methods
module.exports = {
  pie, // MEANS pie: pie, 
  predictable, // MEANS predicatble: predictable, 
};


// MORE OBJECT DESTRUCTURING BUT SUPER HELPFUL EXAMPLE

const dogs = {
    raining: true,
    noise: "woof",
    makeNoise: function(){
        if(this.raining){
            console.log(this.noise)
        }
    },
};

const cats = {
    raining: false,
    noise: "meow",
    makeNoise: function(){
        if(!this.raining){
            console.log(this.noise)
        }
    },
};
dogs.makeNoise()
cats.makeNoise();


// Cannot desturcture raining twice as it is already used. So just reassign it to a new variable
const massHysteria = ({raining}, {raining: raining2}) => {
    if(raining && raining2){
        console.log("Cats & Dogs, mass hysterial")
    }
}

cats.raining = true;
massHysteria(dogs, cats);

// How to use constructors 

// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = () => {
      if (this.raining === true) {
        console.log(this.noise);
      }
    };
  }
  
  // Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
  const dogs = new Animal(true, "Woof!");
  const cats = new Animal(false, "Meow!");