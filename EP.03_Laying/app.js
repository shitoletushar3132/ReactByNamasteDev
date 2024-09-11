import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

//JSx (transpiled before it reaches the js) - parcel - babel

//Jsx => babel transpiles it to React.createElement => JS object => HTMLElement(render)

const jsxHeading = <h1 id="headling">React with JSX</h1>;

//React Component
const HeadingComponent = () => {
  return <h1>React Funcational Component</h1>;
};

root.render(<HeadingComponent />);
