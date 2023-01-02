import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 className="title" key="myheading">
    Hello world
  </h1>
);

/**
 * Component
 * 1. Functional component
 * 2. Class component
 */

const Welcome = () => {
  return <h1>Welcome to React world</h1>;
};

/**
 * here heading is a react element and if you see it is like a js variable.
 * inside curley braces you can write any peacie of javaScript
 */

const HeaderComponent = function(){
  return (
    <div>
      {heading}                            
      <Welcome />  
      {Welcome()}
      {console.log(1+2)}
      <h1>Hello from Functional component</h1>
      <h2>heading 2</h2>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Welcome />);
root.render(<HeaderComponent />);
