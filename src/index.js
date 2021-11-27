import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Test from "./Test";
import Text from "./Text";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Text text="Regular text" size={16} color="grey" />
    <Text text="Huge header" size={20} color="black"/>
    <Text text="Danger notification" size={12} color="red" />
    <Text text="Underlined text" size={18} color="black" underline />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
