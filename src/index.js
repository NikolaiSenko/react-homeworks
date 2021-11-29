import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Square from "./Square"

ReactDOM.render(
  <React.StrictMode>
    <Square cssClass ='big-square' label={<p>A BIG square</p>} />
    <Square cssClass ='middle-square' label={<p>A less square</p>} />
    <Square cssClass ='small-square' label={<p>The smallest one</p>} />
  </React.StrictMode>,
  document.getElementById("root")
);
