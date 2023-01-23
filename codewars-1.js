// codewars https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
// training on sentence smash
function smash (words) {
    var sentence = "";
    for(var i = 0; i < words.length; i++){
    sentence += words[i] + " ";
    }
     return sentence.trim();
  };
// Remember to initialise your variables or nothing will work.
// In the code you provided, var sentence += words[i] is trying to add the value of
// words[i] to sentence, but because sentence has not been assigned a value, 
// it is undefined.

// In JavaScript, undefined is not a number, so you can't perform mathematical
//  operations on it. Therefore, you cannot use the += operator to add a value to undefined.

smash = function (words) {
    return words.join(" ");
  };

// This is an alternate solution to the above problem. 




// opposites attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
function lovefunc(flower1, flower2){
    if(flower1 % 2 !== flower2 % 2){
      return true 
    } else {
      return false
    }
    // moment of truth
  }
  // No need for the lengthy stuff above 
  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  };


// Needle in the haystack https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
  for(var i = 0; i < haystack.length; i++){
    if(haystack[i] === "needle"){
      var needleIndex = i;
    }
  }
  return "found the needle at position " + needleIndex;
}

// Remember to put the things that you need returned outside of the loop function or
// it will only return the first time it finds the needle and exit the loop
// alternate solution:

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// Keep Hydrated! https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

function litres(time) {
  var amountDrunk = time * 0.5;
  var roundedAmountDrunk = Math.floor(amountDrunk)
  return roundedAmountDrunk;
}


// Arrow function: ES6
// Anonymous functions are often used when a short-lived function is needed, 
// and a name for the function is not required for readability or debugging. 
// Anonymous functions are typically used as arguments to other functions or as callback functions.

function(x) {
  return x*2;
};

// equivalent to:

x => x*2;

// these values (arguments) are transformed or are sent to the function 

// .filter();
 const ages = [32, 33, 16, 40];
 const result = ages.filter(checkAdult);

 function checkAdult(age) {
  return age >= 18;
}

// see how this is how anonymous functions are used.
// Unlike the code above, we are putting a function as a parameter of the filter method
// with x being the elements of the list 
// this could be described using an arrow function:

function filter_list(l) {
  return l.filter(function(x) {
        return typeof x === 'number';
    });
}

filter_list([1,2,'a','b']) == [1,2]

function filter_list(l) {
  return l.filter(v => typeof v == "number")
 }


// Reversing an array 

let myArray = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = myArray.length - 1; i >= 0; i--) {
    reversedArray.push(myArray[i]);
}
console.log(reversedArray);

// i.myArray.length - 1 = 4; 
// while i is greater than 0 
// decrement i by one
// push my array[4] into reversed array (the number 5)
// push my array[3] into... (number 4) etc.

function solution(str){
  const splitStr = str.split("");
  var reverseStrArray = [];
  for(var i = splitStr.length - 1; i >= 0; i--){
  reverseStrArray.push(splitStr[i]);  
  }
  return reverseStrArray.join("");
}

// .split("") The split() method splits a string into an array of substrings.
// If (" ") is used as separator, the string is split between words.
// string.split(separator, limit)
// limit:	Optional.
// An integer that limits the number of splits.
// Items after the limit are excluded.
// Alternate solution with arrow function:

const solution = str => str.split('').reverse().join('');

// or 

function solution(str){
  return str.split('').reverse().join('');  
}