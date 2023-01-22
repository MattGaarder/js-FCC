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
