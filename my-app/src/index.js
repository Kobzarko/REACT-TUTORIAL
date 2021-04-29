import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const elem = <h2>Hello world</h2>;
// const elem2 = React.createElement("h3", null, "Hello team!");

const Header = () => {
  return <h2>Hello my friend</h2>;
};

const Field = () => {
  return <input type="text" placeholder="Type here" />;
};

const Btn = () => {
  const text = "Log in";
  // const Res = () => {
  //   return "Log in, please";
  // };
  // const p = <p>Log in</p>;
  // Мы не можем помещать объекты внутрь наших реакт элементов

  return <button>{text}</button>;
};

const App = () => {
  return (
    <div>
      <Header />
      <Field />
      <Btn />
    </div>
  );
};

// ReactDOM.render(elem, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
