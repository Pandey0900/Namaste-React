import React, { Component } from "react";
import ReactDOM from "react-dom/client";

// * This is how we create elements using Core React
// * React Element
// * React.createElement = Object => when render to the DOM, then it will becomes an HTMl element.
// * React.createElement = Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React using react element 🚀"
);

console.log(heading);

// * JSX = JSX is a JavaScript Syntax which is easier to create React Elements
// * JSX - is not HTML in JavaScript, but JSX is HTML like or XML like Syntax
// * This is how we create elements using JSX
// * JSX is React.createElement at the end of the day

// JSX (transipiled before it reaches the JS Engine)
// Transpiled means -> Transpiling is converting one higher level language to another higher level language. For example, Typescript is a high level language but after it's transpiled it's turned into JavaScript (another high level language). Or Babel for example can transpile ES6 JavaScript code into ES5 JavaScript.

// Parcel is Transpiling this code, means Parcel Manages Transpiling the code which is done By the Package known as Babel. Babel is a Transpiler - A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler is a type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language.

// * JSX => Transpiled to React.createElement => React.JS Object = will be converted to HTMLElement on render(render)
const JSXheading =() => (<h1 id="heading">Namaste React using JSX 🚀</h1>);

console.log(JSXheading);

const name="React Componet"
 // creating component 
  const HeadingComponent=()=>(
    <div className="containeer">
        {name}
      <JSXheading/>
      <h1 className="heading">Namaste React functional component</h1>
    </div>
  )
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
