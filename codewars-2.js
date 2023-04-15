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
    return str.replace(/[aeiou]/gi, '');
  }

// Str to integer

var stringToNumber = function(str){
    return parseInt(str);
  }

// Contrast and compare

var stringToNumber = function(str){
    return Number(str);
  }

// And 

var stringToNumber = Number;



// Friends with names greater than 4 characters long

function friend(friends) {
    let realFriends = [];
    for (element of friends) {
      if (element.length !== 4  || typeof element !== "string") {
        continue;
      }
      realFriends.push(element);
    }
    return realFriends;
  }


  // Alternatively 

  const friend = friends => friends.filter(friend => friend.length == 4);

// less clean

  function friend(friends){
    return friends.filter(n => n.length === 4)
  }

  // removing smallest element from an array

  function removeSmallest(numbers) {
    let smallestIndex;
    let smallestNumber = numbers[0];
    for(let i = 0; i < numbers.length; i++ ){
      if(numbers[i] < smallestNumber){
        smallestNumber = numbers[i];
        smallestIndex = i;
      }
    }
    let newArr = numbers.slice()
    newArr.splice(smallestIndex, 1)
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
    let copy = [...numbers]
    let smallest = Math.min(...numbers);
    let smallestIdx = numbers.indexOf(smallest)
    copy.splice(smallestIdx, 1)
    return copy
    }

    let frequency = {};
    for (let letter of "mississippi") {
      if (frequency[letter]) {
        frequency[letter]++;
      } else {
        frequency[letter] = 1;
      }
    }
    frequency;