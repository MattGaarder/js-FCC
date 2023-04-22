paramaters are variables that act as placeholders to values to be input into a function when it is called. Inside parenthesis, this data will be input into function. 'Passing value/information into the function.

using in
```
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
```

// Returning a random number between range of numbers:

function randomRange(myMin, myMax) {
  return Math.floor(Math.random()*(myMax - myMin + 1)) + myMin;
}

// ternary operator
// The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

//!! The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.

// The following function uses an if/else statement to check a condition:

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}

// This can be re-written using the conditional operator:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}


In ES5, an object can be created by defining a constructor function and using the new keyword to instantiate the object.
In ES6, a class declaration has a constructor method that is invoked with the new keyword. If the constructor method is not explicitly defined, then it is implicitly defined with no arguments.

Use getters and setters to Control Access to an Object
You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.

```
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```
Note: It is convention to precede the name of a private variable with an underscore (_). 

Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.

```
// Only change code below this line
class Thermostat {
  constructor(far) {
    this._far = far
  } 
  get temperature() {
    return (5 / 9) * (this._far - 32);
  }
  set temperature(cel){
    this._far = cel * 9.0 / 5 + 32
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

});

A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

Function declaration:

function square(num) {
    return num * num;
}

Function expressions:

const square = function(num) {  // This num is the function parameter (receiving)
    return num * num;
}

square(5)  // This 5 is the function argument, (sending)

First class function:

The concept of functions being able to do everything a variable can do. For example, a function can be passed into a different function.

IIFE:

Immediately invoked function expression.

(function square(num) {
    return num * num;
})(5);   // this is called right-away, returns 25

Review closures and innie functions having access to variables declared in its parents scope.

Call-back function:

A function that is passed in to another function as an argument. Map, filter, reduce, event listeners are all examples of functions that need a call-back function.

Closure: 

A closure is a function that references variables in the outer scope from its inner scope. 
