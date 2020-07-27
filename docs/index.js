"use strict";

import React from "react";
import ReactDOM from "react-dom";
import Docs from "./docs";

React.initializeTouchEvents && React.initializeTouchEvents(true);
ReactDOM.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>,
  document.getElementById("rapp")
);
