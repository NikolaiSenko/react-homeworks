import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UserList from "./extra_task/UserList"

ReactDOM.render(
  <React.StrictMode>
    <UserList listItem='list-item' listContainer='list-container'/>
  </React.StrictMode>,
  document.getElementById("root")
);