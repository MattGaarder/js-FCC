// giphy API IIu7hbfeNksOlVn1A85AFKBAyFp2ZJBk

// SHORTCUT: cmd + shift + "H"     for find and replace all occurences of x
// option + up/down    to move line up or down
// cmd + "D"     for selecting repeating instances of x
// shift + tab     to unindent 
// cmd + shift + "."    (show hidden files)
// Fn + F1    to open command palette 
// shift + alt + "F"    format selection
// alt + "B"    to open in default browser
// cmd + "E"    for three backticks for quote blocking code
// option + shift + up/down   to copy up or down
// Use the F12 / shift + command + "I"     shortcut to quickly open the Developer Tools.

// source ~/.bashrc     load recently made changes
// nano ~/.bashrc     open in text editor 

// relative path to bashprofile: /Users/matt/.bash_profile
// Markdown: [Link](url) makes whatever text you want into a clickable link

// *   - Press `⌘ K, J` to create a new JavaScript File QUORKA
// * To start/restart Quokka on an existing file:
// *   - Press `⌘ K, Q`

// shift + cmd + "P"    open preferences/search for extensions 

// npm init -y
// npm start
// Be sure to kill this local server with `ctrl + c` 
// npx create-react-app reactpractice`

// The output generates package.JSON file, with meta information about node project
// main file to run/script/dependencies etc. 
// "I want to load a package and to tell project to keep track of it"

// npm install badmath

// export NVM_DIR="$HOME/.nvm"
//   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
//   [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

// sudo lsof -i :3000   to show what operations are being performed on the port 

// this will list all PID listening on this port, once you have the PID you can terminate it with the following:

// kill -9



// intialize project to use npm to keep track of dependencies

// Download module and use in own project



// The join() method creates and returns a new string by concatenating all 
// of the elements in an array (or an array-like object), separated by commas or a specified separator string.

// .split("") The split() method splits a string into an array of substrings.
// If (" ") is used as separator, the string is split between words.
// string.split(separator, limit)
// limit:	Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.

// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted.
// The default sort order is ascending, built upon converting the elements into strings

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

// To compare numbers instead of strings, the compare function can subtract b from a. 
// The following function will sort the array in ascending order (if it doesn't contain Infinity and NaN):

function compareNumbers(a, b) {
    return a - b;
  }

// Arrays of objects can be sorted by comparing the value of one of their properties.

  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];

// sort by value
items.sort((a, b) => a.value - b.value);

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const ages = [32, 33, 16, 40];
const results = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// The typeof operator returns a string indicating the type of the operand's value.

console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

typeof 37 === "number";

// The includes() method returns true if a string contains a specified string.

let text = "Hello world, welcome to the universe.";
let result = text.includes("world");

arr.push(...items)  // adds items to the end,
arr.pop()  // extracts an item from the end,
arr.shift()  // extracts an item from the beginning,
arr.unshift(...items)  // adds items to the beginning.

let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

// correct definition of a for loop - for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for(let i = 0; i < arr.length; i++){
      for(let m = 0; m < arr[i].length; m++){
        product *= arr[i][m]
      }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  // Recursion is the concept that a function can be expressed in terms of itself.
  // as the function using a for loop

  function multiply(arrfcc, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arrfcc[i];
    }
    console.log(product);
  }

multiply([1,2,3,4], 4)

// the function expressed in terms of itself

function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }


  function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n -1) + arr[n - 1];
    }
}

// if the parameters passed to the function are ([1,2,3,4], 4), the calculation would proceed as follows:

// 1st Iteration:

// Initial call: sum([1,2,3,4], 4)
// n > 0, so the function calls itself with the same array and n-1: sum([1,2,3,4], 3)
// 2nd Iteration:

// Recursive call: sum([1,2,3,4], 3)
// n > 0, so the function calls itself with the same array and n-1: sum([1,2,3,4], 2)
// 3rd Iteration:

// Recursive call: sum([1,2,3,4], 2)
// n > 0, so the function calls itself with the same array and n-1: sum([1,2,3,4], 1)
// 4th Iteration:

// Recursive call: sum([1,2,3,4], 1)
// n > 0, so the function calls itself with the same array and n-1: sum([1,2,3,4], 0)
// 5th Iteration:

// Recursive call: sum([1,2,3,4], 0)
// n <= 0, so the function returns 0 (base case)
// At this point, the recursive calls begin to unwind, with each previous call taking the result of the next call and add it with the current element of the array:

// 4th Iteration:

// take the result of the 5th Iteration (0) and add with arr[0] (1) , so return 1+0=1
// 3rd Iteration:

// take the result of the 4th Iteration (1) and add with arr[1] (2) , so return 1+2=3
// 2nd Iteration:

// take the result of the 3rd Iteration (3) and add with arr[2] (3) , so return 3+3=6
// 1st Iteration:

// take the result of the 2nd Iteration (6) and add with arr[3] (4) , so return 6+4=10
// so the final output is 10

// The function correctly sums all the element of the array and returns the final sum.