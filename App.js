import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [React.createElement(
    "h1",
    {
      key:" title",
      id: "heading2",
      className: "hello",
    },
    "Hello React"
  ), React.createElement(
    "h2",
    {
      key:" title2",
      id: "heading2",
      className: "hello",
    },
    "Hello React from h2"
  ),, React.createElement(
    "h3",
    {
      key:"title3",
      id: "heading3",
    },
    "Hello React from h3"
  )]
);

console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
