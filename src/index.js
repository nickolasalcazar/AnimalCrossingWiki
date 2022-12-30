import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const CONFIG = require("./config.json");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={CONFIG.BASENAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
