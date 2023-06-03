import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Header from "./Header";

ReactDOM.render(
  <>
    <div className="header">
      <Header/>
    </div>
    <App/>
  </>,

  document.getElementById("root")
);