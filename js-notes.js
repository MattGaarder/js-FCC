
var lastName = "Rosalind";
var thirdLastLetterofLastName = lastName[lastName.length -3];
console.log(thirdLastLetterofLastName)

function myBlankWords (myNoun, myAdj, myVerb, myAdverb){
var result = "";
result += "The " + myNoun + myVerb + " it wz gr8"
return result; 
}
console.log(myBlankWords("dog","humper","humps","qiockly"))

var myArray = ["Akane", 100, "boom"];
var firstItem = myArray[0];
console.log(firstItem)

myArray [1]= "love";
console.log(myArray)
var removedFromArray = myArray.pop()
console.log(myArray)

//removedFromArray becomes equal to last element of array and is removed, this is the function of pop

var firstRemovedFromArray = myArray.shift()
console.log(myArray)

myArray.unshift("Paul",35);
console.log(myArray)

//similar to push function but instead of adding to the back- adds to the front of a list

function functionWithArgs(a, b) {
  console.log(a-b)
}
functionWithArgs(10,5)

console.log()

//paramaters are variables that act as placeholders to values to be input into a function when it is called. Inside parenthesis, this data will be input into function. 'Passing value/information into the function.

function minusSeven(num){
return num -7 
};
console.log(minusSeven(10))

function nextInLine(arr, item){
  arr.push(item)
  return arr.shift()
}
var testArray = [1,2,3,4,5];
console.log("before: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("after: " + JSON.stringify(testArray));     

//nextInLine function removes first item from list with shift, and adds an item to the end of the line

function trueOrFalse(wasThatTrue){
  if (wasThatTrue){
return "Yes, that was true";}
return "No, that was false";}
console.log(trueOrFalse(true));


  
  function testElseIf(val){
    if (val > 10){
      return "greater than 10";
    } else if (val < 5){
    return "smaller than 5";
    } else {
      return "between 10 and 5"
    }
  }
console.log(testElseIf(7));


//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// these are equivalent completely
// correct terminology is property and value. Or key/value
const lookup = {
  alpha: "Adams",
  bravo: "Boston",
  charlie: "Chicago",
  delta: "Denver",
  echo: "Easy",
  foxtrot: "Frank"
}
result = lookup[val];


phoneticLookup("charlie");

// hasOwnProperty() method
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)){
  return obj[checkProp]}
  else {
    return "Not Found"
  }
  // Only change code above this line
}
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") // should return the string pony.


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id][prop] === undefined ){
    records[id][prop] = [];
    records[id][prop].push(value);
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop]
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// iterating through array of objects:

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop];
    } else if(contacts[i].hasOwnProperty(prop) === false){
      return "No such property";
    }
  }
}
  return "No such contact";
}

lookUpProfile("Akira", "likes");

// FCC alternate solutions

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Another:

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

// consider this code in the case of multiple conditions:

function checkSign(num) {
  return (num === 0) ? "zero"
  : (num > 0) ? "positive" : "negative"
}

checkSign(10);

// more recursive funcions 

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));

// This code defines a function called "countup" which takes in a single argument, "n". 
// The function uses a recursive approach to generate an array that counts up from 1 to the input value "n".

// The function starts by checking if the input value "n" is less than 1. If it is, the function returns an empty array.
// If n is not less than 1, the function creates a new variable called "countArray" and assigns the result of calling "countup" function with the value of n-1.
//  The function then pushes the value of n onto the end of the "countArray" using the Array.prototype.push() method, and finally returns the "countArray".

// The console.log(countup(5)) call the function with an argument of 5, which leads to the function calling itself 4 more times, 
// with the values of 4, 3, 2, and 1 respectively. each function call will return an array,
// the first call will return [1], the second call [2,1], the third call [3,2,1] and so on.
// The final call with the input value of 5 will return [5,4,3,2,1].

// In summary, the code defines a recursive function that takes in a single argument "n"
//  and generates an array counting up from 1 to the input value "n" using recursion and the Array.prototype.push() method.
// The function is called with an input value of 5 and prints the final array [5,4,3,2,1] to the console.

// consider this for countdown:

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n)
  }
  return arr;
}

// Arrow Functions:

// Use Arrow Functions to Write Concise Anonymous Functions
// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function.
// Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
// To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

// When there is no function body, and only a return value,
// arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
// This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";

// This code will still return the string value by default.

// Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
// doubler(4) would return the value 8.

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;

// This is the non-arrow function equivalent of this code 

function doubler(item) {
  return item * 2;
}


// It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // would return the value 8.

// In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters.
// With the rest parameter, you can create functions that take a variable number of arguments.
// These arguments are stored in an array that can be accessed later from inside the function.

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

// The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..
// The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.


// figure this out at some point:

let frequency = new Map();
for (let letter of "hello") {
  let count = frequency.get(letter) || 0;
  frequency.set(letter, count + 1);
}
console.log(frequency);

let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
key // => 1
value // => "one"
}


// Using one API call's results in a second API call

// Function to make the first API call
function getFirstApiData() {
  return $.ajax({
    url: "https://first-api.com/data",
    method: "GET"
  });
}

// Function to make the second API call, passing the data from the first API call
function getSecondApiData(firstApiData) {
  return $.ajax({
    url: "https://second-api.com/data",
    method: "GET",
    data: { firstApiData: firstApiData }
  });
}

// Call the first function and use its returned promise to call the second function
getFirstApiData().then(function(firstApiData) {
  getSecondApiData(firstApiData).then(function(secondApiData) {
    // Use the data from the second API call here
    console.log(secondApiData);
  });
});

// You can use the bind method or an arrow function to pass the this keyword from the event listener to the function definition.
// Example using bind:

button.addEventListener("click", function() {
  myFunction.bind(this)();
});

function myFunction() {
  console.log(this);
}

// Example using an arrow function:

button.addEventListener("click", () => {
  myFunction.call(this);
});

function myFunction() {
  console.log(this);
}


// The .bind method can be used to set the value of this within a function to a specific object. 
// You pass the object that you want this to refer to as the first argument to the .bind method. For example:

var obj = {
  prop: "Hello world"
};

function showProp() {
  console.log(this.prop);
}

var boundFn = showProp.bind(obj);

boundFn(); // logs "Hello world"

// In the example above, we have an object obj with a property prop, and a function showProp that logs this.prop.
// By calling .bind(obj) on showProp, we are creating a new function boundFn
// where this will always refer to obj when the function is called. When we call boundFn(), it logs "Hello world".


// rest parameter and arrow function:

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}

//goes to:

const sum = (...args) => args.reduce((a, b) => a + b, 0);


// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
// The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// maximus would have a value of 89.
// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array.
// The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// maximus would have a value of 89.

// These are equivalent, and is what is called destructuring assignment, to extract value from objects

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// name would have a value of the string John Doe, and age would have the number 34.
// the ES6 destructuring syntax:

const { name, age } = user;

// more destructuring assignments:
// Normal nested object:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

// Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { age, email }} = user;

// And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;

// Destructuring assignment with arrays

const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

// The console will display the values of a, b, and c as 1, 2, 5.

// Destructuring via rest elements
// In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

// The result is similar to Array.prototype.slice(), as shown below:

const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);

// The console would display the values 1, 2 and [3, 4, 5, 7].

function removeFirstTwo(list) {
  // Only change code below this line
 const [a, b,...shorterList] = list // ASK ABOUT THIS. HOW IS THIS AN ASSIGNMENT? [Destructuring via rest elements]
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.

// Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
}

// This effectively destructures the object sent into the function. This can also be done in-place:

const profileUpdate = ({ name, age, nationality, location }) => {
}
// When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

// Compare these two syntaxes:
// Destructured version.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; 
// Not destructured version:
const half = (stats) => (stats.max + stats.min) / 2.0; 