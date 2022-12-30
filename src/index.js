import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import { HashRouter as BrowserRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const CONFIG = require("./config.json");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
