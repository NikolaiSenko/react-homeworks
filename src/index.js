import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Square from "./Square"
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Square cssClass ='big-square' label={<p>A BIG square</p>} />
    <Square cssClass ='middle-square' label={<p>A less square</p>} />
    <Square cssClass ='small-square' label={<p>The smallest one</p>} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
