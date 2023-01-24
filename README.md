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

If the object expression
is followed by a dot and an identifier, the value of the property named by that
identifier is looked up and becomes the overall value of the expression. If the object
expression is followed by another expression in square brackets, that second expression
is evaluated and converted to a string. The overall value of the expression is then
the value of the property named by that string. In either case, if the named property
does not exist, then the value of the property access expression is undefined.
The .identifier syntax is the simpler of the two property access options, but notice that
it can only be used when the property you want to access has a name that is a legal
identifier, and when you know the name when you write the program. If the property
64 | Chapter 4: Expressions and Operators
name includes spaces or punctuation characters, or when it is a number (for arrays),
you must use the square bracket notation.