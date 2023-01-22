
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