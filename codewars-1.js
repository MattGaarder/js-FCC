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


// .reduce:

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10


// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

function binary_array_to_number(arr) {
  return arr.reverse().reduce((acc, cur) => acc * 2 + cur);
}

// This function uses the reduce() method to iterate through the array, starting from the leftmost element.
// It first multiplies the accumulator variable 'acc' by 2 and then adds the current element 'cur' to it.
// This results in the equivalent binary value being converted to an integer.

// Alternate solution:

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

// The join() method takes an array and concatenates all of its elements into a single string,
// using the specified separator (in this case, an empty string "" ). So, the arr.join("") 
// call takes the elements of the array and concatenates them into a single string, for example, "0001" for the array [0,0,0,1]
// The parseInt() function is used to convert strings to integers. 
// It takes two arguments: the string to be converted and the radix (base) of the number. In this case, the base is specified as 2, indicating that the number is in binary format. 
// So parseInt(arr.join(""), 2) converts the binary string to an integer.
// So the function binaryArrayToNumber takes an array of binary digits, 
// join them together to form a string representation of the number and convert that string to an integer using parseInt() with radix 2.

//Another alternate: 

const binaryArrayToNumber = arr => {
  // your code
  //array recieved as argument
  //reverse array to begin at first digit
  //loop through array
  //first digit signifies number of 1s| second signifies 2s| 3rd signifies 4s| 4th signifies 8s|
  //add numbers to variable | return variable 
  arr.reverse();
  var count = 0; 
  for(var i = 0; i < arr.length; i++){
      if(arr[i] === 1){
        count += Math.pow(2,i);
      }
  } 
    return count; 
};

// Is there a vowel in there?
// https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript

function isVowel(a) {
  for (i = 0; i < a.length; i++) {
    var charVal = a[i].charCodeAt();
  } var vowelsArray = ["a", "e", "i", "o", "u"];
  for (i = 0; i < vowelsArray.length; i++)
    var vowelsVal = vowelsArray[i].charCodeAt();
  if (charVal === vowelsVal) {
    String.fromCharCode(a[i])
  }
}

// The first issue is with the for loop that iterates over the a parameter. 
// The charVal variable is defined within the scope of the loop and its value is reassigned at every iteration,
// so when the second for loop starts, the value of charVal is the last character in the a parameter,
// rather than the current character being checked.
// The second issue is with the way the vowels are being compared. 
// You are comparing the ASCII values of the characters in the a parameter with the ASCII values of the vowels, 
// but you should be comparing the characters themselves.
// The third issue is with the return statement, after the if statement, the function is not returning the character.


function isVowel(a){
   var vowelsArray = ["a", "e", "i", "o", "u"];
   for (i = 0; i < a.length; i++){
    if (vowelsArray.includes(a[i].toLowerCase())) {
        return String.fromCharCode(a[i]);
    }
   }
   return false;
}
// In this example, the includes() method is used to check if the current character in the a parameter is included in the vowelsArray array,
// and it converts the character to lower case so that the function can check for both lowercase and uppercase vowels. 
// And if the character is a vowel it returns the character, and if not it returns false.

let a = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106];
console.log(a[1])
console.log(String.fromCharCode(65, 66, 67));
console.log(String.fromCharCode(a[1]));
console.log(String.fromCharCode(a[2]));

function isVowel(a) {
  let vowelees = ["a", "e", "i", "o", "u"];
  let resultees = [];
  for (i = 0; i < a.length; i++) {
    if(vowelees.includes(String.fromCharCode(a[i]))) {
      resultees.push(String.fromCharCode(a[i]));
    } else {
      resultees.push(a[i]);
    }
  }
  return resultees;
}

let resultees = isVowel(a);
console.log(resultees);

// Alternate solution:

function isVow(a){
  for (var i=0, l=a.length; i<l; ++i)
  {
    var char = String.fromCharCode(a[i])
    if ('aeiou'.indexOf(char) !== -1)
    a[i] = char;
  }
  
  return a;
}


// // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// Test: Test.assertEquals(solution('abcde', 'cde'), true)
// Test.assertEquals(solution('abcde', 'abc'), false)

str = "abcde";
ending = "cde";

function solution(str, ending){
    // get length of ending. (cde) would be 3
    // get length of string. (abcde) would be 5
    // check if the value of the last index of ending is equal to the value of string length minus the length of ending.
    // Starting with -1 and iterating -1 for the length of ending. 
    // TODO: complete
    // var endingLength = ending.length;
    console.log(str);
    console.log(ending);
    lastLetterOfStr = str[str.length - 1]; //this is equal to e
    console.log(lastLetterOfStr)
    lastLetterOfEnding = ending[ending.length -1]
    console.log(lastLetterOfEnding); //this is also equal to e
    for(i = -1; i >= -(ending.length); i--) {
      console.log(str[str.length + i]) // this logs e, d, c
      console.log(ending[ending.length + i])
      return str[str.length + i] === ending[ending.length + i]
    }
    // i is -1. ending.length is -3. i(-1) is greater than -3.
    //console.log(str[5 - 1]) // e
    // iterate: i is -2. -2 is greater than -3.
  }
  
  solution(str, ending);

// for(i = -1; i > -(ending.length); i--) {
//   console.log(str[str.length[i]])
// }
// The brackets [ ] are used to access an element in an array or a property of an object, but here the brackets are nested, which is not allowed.
// To access the character at index i of the str string, you should use str[str.length + i] instead. This will add the negative value of i to the length of str, 
// which effectively counts backwards from the end of the string.

// For easy reading. Ignore the code above.

function solution(str, ending) {
  for (i = -1; i >= -(ending.length); i--) {
    if (str[str.length + i] === ending[ending.length + i]) {
      return true
    }
  }
  return false
}

// Alternative 1. 

function solution(str, ending) {
  for (let i = 1; i <= ending.length; i++) {
    if (str[str.length - i] !== ending[ending.length - i]) {
      return false;
    }
  }
  return true;
}

// So you did it in the complicated way (good for you), but the actually good solution is:

function solution(str, ending){
  return str.endsWith(ending);
}

// Alternative 3.

function solution(str, ending){
  var l = ending.length;
  var str = str.slice(-l);
  return str.match(ending) ? true : false;
}

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
  let result = [];
  for (i = 0; i < data.length; i++) {
    if (data[i][0] > 54 && data[i][1] > 7) {
      result.push("Senior")
    } else {
      result.push("Open")
    }
  }
  return result
}

// Alternative method:

function openOrSenior(data){
  return data.map(function(d){
    return d[0] >= 55 && d[1] > 7 ? 'Senior' : 'Open';
  });
}

// or

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// Take the data array and call map
// For each, [arguments]
// return ... logic (ternary operator)

// Map function takes a callback function. In that callback function, we've defined our parameter as age/handicap
// In the callback function we define we show how to transform each individual item to the new one that we want in the resulting array
// Map returns an array. Or anything else, like an object for example:

const minfiedRecords = characters.map(character => ({name: character.name, height: character.heigth}))