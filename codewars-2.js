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