import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React element </span>;

// React Element
const Title = () => (
  <h1 className="head" tabIndex="1">
    React using JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Hello World Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
