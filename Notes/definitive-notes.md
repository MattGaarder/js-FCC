# js-FCC
An expression is a phrase of JavaScript that can be evaluated
to produce a value.

For simplicity, we sometimes say that an operator returns a value
rather than “evaluates to” a value.

A property access expression evaluates to the value of an object property or an array
element. JavaScript defines two syntaxes for property access:
expression . identifier
expression [ expression ]

let o = {x: 1, y: {z: 3}}; // An example object
let a = [o, 4, [5, 6]]; // An example array that contains the object
o.x // => 1: property x of expression o
o.y.z // => 3: property z of expression o.y
o["x"] // => 1: property x of object o
a[1] // => 4: element at index 1 of expression a
a[2]["1"] // => 6: element at index 1 of expression a[2]
a[0].x // => 1: property x of expression a[0]

64 | Chapter 4: Expressions and Operators
If the object expression is followed by a dot and an identifier, the value of the property named by that
identifier is looked up and becomes the overall value of the expression. If the object expression is followed 
by another expression in square brackets, that second expression is evaluated and converted to a string. The overall
value of the expression is then the value of the property named by that string. In either case, if the named
property does not exist, then the value of the property access expression is undefined. The .identifier syntax is the
simpler of the two property access options, but notice that it can only be used when the property you want to access has
a name that is a legal identifier, and when you know the name when you write the program. If the property
name includes spaces or punctuation characters, or when it is a number (for arrays),
you must use the square bracket notation.


The in operator expects a left-side operand that is a string, symbol, or value that can
be converted to a string. It expects a right-side operand that is an object. It evaluates
to true if the left-side value is the name of a property of the right-side object. For
example:

let point = {x: 1, y: 1}; // Define an object
"x" in point // => true: object has property named "x"
"z" in point // => false: object has no "z" property.
"toString" in point // => true: object inherits toString method
let data = [7,8,9]; // An array with elements (indices) 0, 1, and 2
"0" in data // => true: array has an element "0"
1 in data // => true: numbers are converted to strings
3 in data // => false: no element 3

The instanceof operator expects a left-side operand that is an object and a right-side
operand that identifies a class of objects. The operator evaluates to true if the leftside
object is an instance of the right-side class and evaluates to false otherwise.
Chapter 9 explains that, in JavaScript, classes of objects are defined by the constructor
function that initializes them. Thus, the right-side operand of instanceof should be a
function. Here are examples:

let d = new Date(); // Create a new object with the Date() constructor
d instanceof Date // => true: d was created with Date()
d instanceof Object // => true: all objects are instances of Object
d instanceof Number // => false: d is not a Number object
let a = [1, 2, 3]; // Create an array with array literal syntax
a instanceof Array // => true: a is an array
a instanceof Object // => true: all arrays are objects
a instanceof RegExp // => false: arrays are not regular expressions 

greeting = "hello " + (username ? username : "there");

This is equivalent to, but more compact than, the following if statement:

greeting = "hello ";
if (username) {
greeting += username;
} else {
greeting += "there";
}

?? is a useful alternative to || (§4.10.2) when you want to select the first defined
operand rather than the first truthy operand. Although || is nominally a logical OR
operator, it is also used idiomatically to select the first non-falsy operand with code
like this:
// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500;
The problem with this idiomatic use is that zero, the empty string, and false are all
falsy values that may be perfectly valid in some circumstances. In this code example,
if maxWidth is zero, that value will be ignored. But if we change the || operator to ??,
we end up with an expression where zero is a valid value:
// If maxWidth is defined, use that. Otherwise, look for a value in
// the preferences object. If that is not defined, use a hardcoded constant.
let max = maxWidth ?? preferences.maxWidth ?? 500;

typeof is a unary operator that is placed before its single operand, which can be of
any type. Its value is a string that specifies the type of the operand. Table 4-3 specifies
the value of the typeof operator for any JavaScript value.

delete is a unary operator that attempts to delete the object property or array element
specified as its operand. Like the assignment, increment, and decrement operators,
delete is typically used for its property deletion side effect and not for the value
it returns. Some examples:

let o = { x: 1, y: 2}; // Start with an object
delete o.x; // Delete one of its properties
"x" in o // => false: the property does not exist anymore
let a = [1,2,3]; // Start with an array
delete a[2]; // Delete the last element of the array
2 in a // => false: array element 2 doesn't exist anymore
a.length // => 3: note that array length doesn't change, though

Note that a deleted property or array element is not merely set to the undefined
value. When a property is deleted, the property ceases to exist. Attempting to read a
nonexistent property returns undefined, but you can test for the actual existence of a
property with the in operator (§4.9.3). Deleting an array element leaves a “hole” in
the array and does not change the array’s length.



FCC APIs
Rest - Representational state transfer 

![Alt text](images/Screenshot%202023-01-25%20at%2007.40.43.png)

Image above are the guiding architectural constraints for an API to be considered restful.

Protocol used to make request to the server is HTTP. (stateless).
If you want your state to be remembered by the client, you need to send it which each request. This can be done with headers.
These are the first two constraints client/server architecture and stateless. 

URL - Unique resource location (everything is a resource/collection)
Everything that our programme can do to our resource can be expressed as CRUD - creating, reading, updating, deleting.
Clicking on links or resources is our programme sending a GET request to the API (URL). The server responds with data.
The body of this is typically represented as JSON - JavaScript Object Notation. Basically the means of turning a JSON
string into a native object. Structuring our data. Although CT is typically something that you can specify in your request
if JSON is not your thing.

HTTP verbs available:
GET 
POST (want to add data)
PUT (update)
PATCH (update)
DELETE (want to remove data)

Smushing data together from different APIs is called a mash-up

SDK - software development kit. (Gives you an API that wraps around other APIs)/helper library
code that is widely available to avoid having to write boiler-plate code

Note: %20 is a space

Lizzo ID: 56oDRnqbIiwx4mymNEv7dS

Here, for example, is how we can use for/of to loop through the elements of an array
of numbers and compute their sum:

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
sum += element;
}
sum // => 45

Superficially, the syntax looks like a regular for loop: the for keyword is followed by
parentheses that contain details about what the loop should do. In this case, the
parentheses contain a variable declaration (or, for variables that have already been
declared, simply the name of the variable) followed by the of keyword and an expression
that evaluates to an iterable object, like the data array in this case. As with all
loops, the body of a for/of loop follows the parentheses, typically within curly
braces.
108 | Chapter 5: Statements
In the code just shown, the loop body runs once for each element of the data array.
Before each execution of the loop body, the next element of the array is assigned to
the element variable. Array elements are iterated in order from first to last.
Arrays are iterated “live”—changes made during the iteration may affect the outcome
of the iteration. If we modify the preceding code by adding the line data.push(sum);
inside the loop body, then we create an infinite loop because the iteration can never
reach the last element of the array.

for/of with objects
Objects are not (by default) iterable. Attempting to use for/of on a regular object
throws a TypeError at runtime:
let o = { x: 1, y: 2, z: 3 };
for(let element of o) { // Throws TypeError because o is not iterable
console.log(element);
}
If you want to iterate through the properties of an object, you can use the for/in loop
(introduced in §5.4.5), or use for/of with the Object.keys() method:
let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
keys += k;
}
keys // => "xyz"
This works because Object.keys() returns an array of property names for an object,
and arrays are iterable with for/of. Note also that this iteration of the keys of an
object is not live as the array example above was—changes to the object o made in the
loop body will have no effect on the iteration. If you don’t care about the keys of an
object, you can also iterate through their corresponding values like this:
let sum = 0;
for(let v of Object.values(o)) {
sum += v;
}
sum // => 6
And if you are interested in both the keys and the values of an object’s properties, you
can use for/of with Object.entries() and destructuring assignment:
let pairs = "";
for(let [k, v] of Object.entries(o)) {
pairs += k + v;
}
pairs // => "x1y2z3"
5.4 Loops | 109
Object.entries() returns an array of arrays, where each inner array represents a
key/value pair for one property of the object. We use destructuring assignment in this
code example to unpack those inner arrays into two individual variables.

let frequency = {};
for(let letter of "mississippi") {
if (frequency[letter]) {
frequency[letter]++;
} else {
frequency[letter] = 1;
}
}
frequency

This code uses a JavaScript for loop to iterate over the letters of the string "mississippi". It creates an empty object called frequency at the beginning of the code.

For each letter in the string, the code checks if the letter already exists as a key in the frequency object. If it does, it increments the value of that key by 1. If the letter does not exist as a key in the frequency object, it is added as a key with a value of 1.

After the for loop finishes iterating over the string, the frequency object will contain keys for each letter in the string, and the value of each key will be the number of times that letter appears in the string.

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for(let word of wordSet) {
unique.push(word);
}
This code uses JavaScript to process a string called "text" that contains the phrase "Na na na na na na na na Batman!"

It creates a new JavaScript Set object by using the text string and passing it through the split() method, which separates the string into an array of substrings using the space character as a separator. This creates a set of unique words from the text string.

It then creates an empty array called "unique".

The code then uses a for-of loop to iterate over the elements of the wordSet set. For each word in the wordSet set, it calls the push() method on the "unique" array, adding the current word to the end of the array.

After the for-of loop finishes executing, the "unique" array will contain all the unique words from the text string in the order they appeared in the text.

In this case, the unique array would contain ["Na", "na", "Batman!"]

what does set do?

In JavaScript, a Set is a collection of unique values, which means that it can't contain any duplicate values.

It is similar to an array, but it has some important differences. Elements in a set are unique, and they are not stored in any particular order. Also, sets do not have any indexed elements, so you can't access elements by their index number.

You can add, remove, and check for the presence of elements in a Set, using methods like add(), delete(), and has().

In this specific code, the new Set(text.split(" ")) creates a new set from an array of substrings obtained from the text string using the .split() method with a space character as the separator.

This process eliminates the duplicate words from the text and only keeps the unique words.


The for/in statement loops through the property names of a specified object. The
syntax looks like this:
for (variable in object)
statement
variable typically names a variable, but it may be a variable declaration or anything
suitable as the left-hand side of an assignment expression. object is an expression that
evaluates to an object. As usual, statement is the statement or statement block that
serves as the body of the loop.
And you might use a for/in loop like this:
for(let p in o) { // Assign property names of o to variable p
console.log(o[p]); // Print the value of each property
}
To execute a for/in statement, the JavaScript interpreter first evaluates the object
expression. If it evaluates to null or undefined, the interpreter skips the loop and
moves on to the next statement. The interpreter now executes the body of the loop
once for each enumerable property of the object. Before each iteration, however, the
interpreter evaluates the variable expression and assigns the name of the property (a
string value) to it.


OBJECTS:

Objects can be created with object literals, with the new keyword, and with the
Object.create()

6.2.2 Creating Objects with new
The new operator creates and initializes a new object. The new keyword must be followed
by a function invocation. A function used in this way is called a constructor and
serves to initialize a newly created object. JavaScript includes constructors for its
built-in types. For example:
let o = new Object(); // Create an empty object: same as {}.
let a = new Array(); // Create an empty array: same as [].
let d = new Date(); // Create a Date object representing the current time
let r = new Map(); // Create a Map object for key/value mapping

Object.create() creates a new object, using its first argument as the prototype of
that object:
let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
o1.x + o1.y // => 3

6.3 Querying and Setting Properties
To obtain the value of a property, use the dot (.) or square bracket ([]) operators
described in §4.4. The lefthand side should be an expression whose value is an object.
If using the dot operator, the righthand side must be a simple identifier that names
the property. If using square brackets, the value within the brackets must be an
expression that evaluates to a string that contains the desired property name:
let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

As explained in the preceding section, the following two JavaScript expressions have
the same value:
object.property
object["property"]
The first syntax, using the dot and an identifier, is like the syntax used to access a
static field of a struct or object in C or Java. The second syntax, using square brackets
and a string, looks like array access, but to an array indexed by strings rather than by
numbers. This kind of array is known as an associative array (or hash or map or dictionary).
JavaScript objects are associative arrays, and this section explains why that is
important.

On the other hand, when you access a property of an object with the [] array notation,
the name of the property is expressed as a string. Strings are JavaScript datatypes,
so they can be manipulated and created while a program is running. So, for
example, you can write the following code in JavaScript:
let addr = "";
for(let i = 0; i < 4; i++) {
addr += customer[`address${i}`] + "\n";
}
This code reads and concatenates the address0, address1, address2, and address3
properties of the customer object.
This brief example demonstrates the flexibility of using array notation to access properties
of an object with string expressions. This code could be rewritten using the dot
notation, but there are cases in which only the array notation will do. Suppose, for
example, that you are writing a program that uses network resources to compute the
current value of the user’s stock market investments. The program allows the user to
type in the name of each stock they own as well as the number of shares of each stock.
You might use an object named portfolio to hold this information. The object has
134 | Chapter 6: Objects
one property for each stock. The name of the property is the name of the stock, and
the property value is the number of shares of that stock. So, for example, if a user
holds 50 shares of stock in IBM, the portfolio.ibm property has the value 50.
Part of this program might be a function for adding a new stock to the portfolio:
function addstock(portfolio, stockname, shares) {
portfolio[stockname] = shares;
}
Since the user enters stock names at runtime, there is no way that you can know the
property names ahead of time. Since you can’t know the property names when you
write the program, there is no way you can use the . operator to access the properties
of the portfolio object. You can use the [] operator, however, because it uses a string
value (which is dynamic and can change at runtime) rather than an identifier (which
is static and must be hardcoded in the program) to name the property.

In Chapter 5, we introduced the for/in loop (and we’ll see it again shortly, in §6.6).
The power of this JavaScript statement becomes clear when you consider its use with
associative arrays. Here is how you would use it when computing the total value of a
portfolio:
function computeValue(portfolio) {
let total = 0.0;
for(let stock in portfolio) { // For each stock in the portfolio:
let shares = portfolio[stock]; // get the number of shares
let price = getQuote(stock); // look up share price
total += shares * price; // add stock value to total value
}
return total; // Return total value.
}

let o = {}; // o inherits object methods from Object.prototype
o.x = 1; // and it now has an own property x.
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.
let f = q.toString(); // toString is inherited from Object.prototype
q.x + q.y // => 3; x and y are inherited from o and p

Now suppose you assign to the property x of the object o. If o already has an own
(non-inherited) property named x, then the assignment simply changes the value of
this existing property. Otherwise, the assignment creates a new property named x on
the object o. If o previously inherited the property x, that inherited property is now
hidden by the newly created own property with the same name.
Property assignment examines the prototype chain only to determine whether the
assignment is allowed. If o inherits a read-only property named x, for example, then
the assignment is not allowed. (Details about when a property may be set are in
§6.3.3.) If the assignment is allowed, however, it always creates or sets a property in
the original object and never modifies objects in the prototype chain. The fact that
inheritance occurs when querying properties but not when setting them is a key feature
of JavaScript because it allows us to selectively override inherited properties:

let unitcircle = { r: 1 }; // An object to inherit from
let c = Object.create(unitcircle); // c inherits the property r
c.x = 1; c.y = 1; // c defines two properties of its own
c.r = 2; // c overrides its inherited property
unitcircle.r // => 1: the prototype is not affected

The in operator expects a property name on its left side and an object on its right. It
returns true if the object has an own property or an inherited property by that name:
let o = { x: 1 };
"x" in o // => true: o has an own property "x"
"y" in o // => false: o doesn't have a property "y"
"toString" in o // => true: o inherits a toString property
The hasOwnProperty() method of an object tests whether that object has an own
property with the given name. It returns false for inherited properties:
let o = { x: 1 };
o.hasOwnProperty("x") // => true: o has an own property x
o.hasOwnProperty("y") // => false: o doesn't have a property y
o.hasOwnProperty("toString") // => false: toString is an inherited property

In ES6 and later, string literals can be delimited with backticks:
let s = `hello world`;
This is more than just another string literal syntax, however, because these template
literals can include arbitrary JavaScript expressions. The final value of a string literal
in backticks is computed by evaluating any included expressions, converting the values
of those expressions to strings and combining those computed strings with the
literal characters within the backticks:
let name = "Bill";
let greeting = `Hello ${ name }.`; // greeting == "Hello Bill."
Everything between the ${ and the matching } is interpreted as a JavaScript expression.
Everything outside the curly braces is normal string literal text. The expression
inside the braces is evaluated and then converted to a string and inserted into the
template, replacing the dollar sign, the curly braces, and everything in between them.


Lower-level module that allows us to make http from our node code. 
Rather than finding a package, it lets us put together what we would do on the front-end with ajax or fetch.
(Basically a module that allows us to make http requests).

const axios = require("axios");

function MovieSearch() {}

MovieSearch.prototype.buildUrl = function(movie){
    return `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`;
};

makes http request to the above URL

MovieSearch.prototype.search = function(movie) {
    return axios.get(this.buildUrl(movie));
};

module.exports = MovieSearch

what would use this - index.js:

const MovieSearch = require("./movieSearch");

const movie = new MovieSearch();

movie.search("spider-man)
    .then(res => console.log(res.json))  // after promise comes back, res.json is logged


// Constructor is a keyword - is the same as a new Constructor { etc. }

class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const shape = new Shape(25, 25);

shape.printInfo();