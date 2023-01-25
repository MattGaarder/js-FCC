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


