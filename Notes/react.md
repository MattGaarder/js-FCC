# React Notes

```
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById("root"));
```

There is an accompanying ```<div>``` with id ```root``` (container for whole page) in the html. We get ReactDOM (object) from the library.

Global variable with .render() method that displays on screen.

First paramater is **what** do I want to place,
and second parameter is **where** I want to place it

Think of it like append child.

can also use ```.querySelector(#root);```

---


Commands that can be used in conjunction with node.

Generate a starter React app using Create React App. You can do this by running 

`npx create-react-app reactpractice`.

Start the app by running `npm start`

This will be hosted locally [http://localhost:3000](http://localhost:3000).

Be sure to kill this local server with `ctrl + c`


Most basic file setup for a react application:
In components file:

```
import React from "react";

function HelloReact() {
  return <p>Hello World!</p>;
}

export default HelloReact;
```

Please note that: If you're trying to render multiple JSX tags from a single component, you should enclose all of the JSX tags within a single parent tag, such as a `div`.

You can also use the anonymous tag 
```
<> </>
```


In our App.js file:
```
import React from "react";
import HelloReact from "./components/HelloReact";

function App() {
  return <HelloReact />;
}

export default App;
```

In our index.js file:

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

To install bootstrap into our React App use the following commands:

`npm install --save bootstrap`

Add `import 'bootstrap/dist/css/bootstrap.min.css';` to the `index.js` file.

## Please note

All JSX tags must either have an adjacent tag or else have a self-closing forward slash.

`className` must be used to describe an element's `class` property since `class` is a reserved word in JavaScript.

## This is a JSX element logged to the console

{$$typeof: Symbol(react.element),
 type: 'h1',
  key: null,
   ref: null,
    props: {…}, …}$$typeof: Symbol(react.element)key: nullprops: {className: 'header', children: 'This is JSX'}ref: nulltype: "h1"_owner: null_store: {validated: false}_self: undefined_source: {fileName: '/Users/matt/Desktop/mgaarder-portfolio/mgaarder-portfolio/src/index.js', lineNumber: 15, columnNumber: 17}[[Prototype]]: Object