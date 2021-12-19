import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './navigation'
import Sauces from "./components/Sauces"
ReactDOM.render(
  <React.StrictMode>
    <Sauces/>
  </React.StrictMode>,
  document.getElementById("root")
);
