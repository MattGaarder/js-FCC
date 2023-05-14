// function disemvowel(str) {

//     return str;
// }

// let str = "This website is for losers LOL!";

// function disemvowel(str) {
//   const splitStr = str.split("");
//   const dved = [];
//   const vowels = ["a","e","i","o","u"];
//   for(i = 0; i < splitStr.length; i++) {
//     for (y = 0; y < vowels.length; y++){
//       if(splitStr[i] === vowels[y]){
//         splitStr.splice(i)
//       } else {
//         dved.push(splitStr[i])
//       }
//       let str = dved.join("")
//     }
// }
//   console.log(str[0])

//   return str;
// }

// disemvowel(str)

// the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// function disemvowel(str) {
//     const splitStr = str.split("");
//     const resultArr = [];
//     const vowels = ["a", "e", "i", "o", "u"];

//     for (let i = 0; i < splitStr.length; i++) {
//       if (!vowels.includes(splitStr[i].toLowerCase())) {
//         resultArr.push(splitStr[i]);
//       }
//     }

//     const resultStr = resultArr.join("");
//     return resultStr;
//   }

//   const str = "This website is for losers LOL!";
//   console.log(disemvowel(str));

// function disemvowel(str) {
//     const splitStr = str.split("");
//     const dvedArray = [];
//     const vowels = ["a","e","i","o","u"];

//     for(i = 0; i < splitStr.length; i++) {
//       let isVowel = false;

//       for (y = 0; y < vowels.length; y++){
//         if(splitStr[i].toLowerCase() === vowels[y]){
//           isVowel = true;
//           break;
//         }
//       }

//       if (!isVowel) {
//         dvedArray.push(splitStr[i]);
//       }
//     }

//     const resultStr = dvedArray.join("");
//     return resultStr;
//   }

//   const str = "This website is for losers LOL!";
//   console.log(disemvowel(str)); // Output: "Ths wbst s fr lsrs LL!"

let str = "This website is for losers LOL!";

function disemvowel(str) {
  const splitStr = str.split("");
  const dvedArray = [];
  const vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < splitStr.length; i++) {
    let isVowel = false;
    for (y = 0; y < vowels.length; y++) {
      if (splitStr[i].toLowerCase() === vowels[y]) {
        isVowel = true;
        break;
      }
    }
    if (!isVowel) {
      dvedArray.push(splitStr[i]);
    }
  }
  const resultStr = dvedArray.join("");
  console.log(resultStr);
  return resultStr;
}

disemvowel(str);

// Alternate solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Str to integer

var stringToNumber = function (str) {
  return parseInt(str);
};

// Contrast and compare

var stringToNumber = function (str) {
  return Number(str);
};

// And

var stringToNumber = Number;

// Friends with names greater than 4 characters long

function friend(friends) {
  let realFriends = [];
  for (element of friends) {
    if (element.length !== 4 || typeof element !== "string") {
      continue;
    }
    realFriends.push(element);
  }
  return realFriends;
}

// Alternatively

const friend = (friends) => friends.filter((friend) => friend.length == 4);

// less clean

function friend(friends) {
  return friends.filter((n) => n.length === 4);
}

// removing smallest element from an array

function removeSmallest(numbers) {
  let smallestIndex;
  let smallestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
      smallestIndex = i;
    }
  }
  let newArr = numbers.slice();
  newArr.splice(smallestIndex, 1);
  return newArr;
}

// Alternative

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

// Or a little clearer

function removeSmallest(numbers) {
  numbers = numbers.slice(0);
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}

// even more

function removeSmallest(numbers) {
  let copy = [...numbers];
  let smallest = Math.min(...numbers);
  let smallestIdx = numbers.indexOf(smallest);
  copy.splice(smallestIdx, 1);
  return copy;
}

let frequency = {};
for (let letter of "mississippi") {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
}

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

let splitArray = str.split(" ");
let completedArray = [];
for (i = 0; i < splitArray.length; i++) {
  completedArray.push(splitArray[i].split("").reverse().join(""));
}
return completedArray.join(" ");

// Alternative

function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

// Another

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// My solution

function enough(cap, on, wait) {
  if (on + wait < cap){
  return 0;
  } else {
  return (on + wait) - cap;
  }
}

// Much nicer solution

function enough(cap, on, wait) {
  return (on+wait > cap) ? on+wait-cap : 0;
}

// Return the quarter for what month it is. My solution:
let month = 1;
const quarterOf = (month) => {
  switch(true){
      case month < 4:
        return 1;
      case month < 7:
        return 2;
      case month < 10:
        return 3;
      case month < 13:
        return 4;
  }
}

// much cleaner solution:

const quarterBof = m => Math.ceil(m/3);

// m/3: This expression divides the input month m by 3. For months 1-3, 
// the result will be between 1 and 1.99 (inclusive); for months 4-6, the result will be between 2 and 2.99 (inclusive), and so on.

// Math.ceil(): This function takes a number and rounds it up to the nearest integer.
// So, when we pass the result of m/3 to Math.ceil(), it rounds up the result to the nearest whole number. 

// Or! Longy-pongy ternary:

const quarterNof = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
}

// Kind of super slow but also functional way of doing it

const monthToQuarterMap = {
  '1': 1,
  '2': 1,
  '3': 1,
  '4': 2,
  '5': 2,
  '6': 2,
  '7': 3,
  '8': 3,
  '9': 3,
  '10': 4,
  '11': 4,
  '12': 4,
};

function quarterOf(month) {
  return monthToQuarterMap[month];
}

// Another interesting one:

const quarterOf=month=>[1,1,1,1,2,2,2,3,3,3,4,4,4][month]

// Function that converts a bboolean to a string

function booleanToString(b){
  return b.toString();
}

function booleanToString(b){
  return b ? 'true' : 'false';
}

function booleanToString(b){
  return String(b);
}

function booleanToString(b){
  return `${b}`
}

// Return sum of positive integers in an array

function positiveSum(arr){
  return arr.reduce((sum, currentValue) => {
    return currentValue > 0 ? sum + currentValue : sum;
  },0);
}

// Alternative

function positiveSum(arr) {
  let sum = 0; 
  for (n of arr) {
    if (n > 0) sum += n;
  }
  return sum;
}

// More elegant:

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}

// Return first non-consecutive number in an array

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++){
    if(arr[i] !== arr[i + 1] - 1){
       return arr[i + 1]
    }
  }
  return null
}

// Return squared numbers from an integer

function squareDigits(num) {
  let squaredDigitsArray = [];
  let stringNum = num.toString();
  for (i = 0; i < stringNum.length; i++) {
    squaredDigitsArray.push(stringNum[i] * stringNum[i]);
  }
  return parseInt(squaredDigitsArray.join(""));
}

// Much more elegant way of doing it

const squareDigits = (num) => Number((num + '').split("").map(c => c * c).join(""));

// Count sheep from an array of [true, false... etc.]
function countSheeps(arrayOfSheep) {
  let present = 0;
  arrayOfSheep.filter((sheep) => {
    if(sheep) {
    present +=1
  }
});
  return present;
}

// Create a function with two arguments that will return an array of the first n multiples of x.

function countBy(x, n) {
  let z = [];
  for(x; n > 0; n--){
    z.push(x * n)
  }
  return z.reverse();
}

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

function nbYear(p0, percent, aug, p) {
  let convertedPercent = percent / 100;
  let changingP = p0;
  let n;
  for (n = 0; changingP < p; n++){
    changingP += Maths.floor(changingP * convertedPercent + aug)
  }
  return n
}

var isSquare = function(n){
  let root = Math.round(Math.sqrt(n));
  if (root * root === n){
    return true
  }
  return false; // fix me
}