"use strict";
import { createRoot } from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom";
import Docs from "./docs";

React.initializeTouchEvents && React.initializeTouchEvents(true);
const root = createRoot(document.getElementById("rapp"));

root.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>
);
