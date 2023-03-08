"use strict";

import React from "react";
import Docs from "./docs";
import { createRoot } from "react-dom/client";

React.initializeTouchEvents && React.initializeTouchEvents(true);
const root = createRoot(document.getElementById("rapp"));
root.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>
);
