import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const CONFIG = require("./config.json");

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={CONFIG.BASENAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
