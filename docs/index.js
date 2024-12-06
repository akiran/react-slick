"use strict";

import React from "react";
import { createRoot } from "react-dom/client";
import Docs from "./docs";

const container = document.getElementById("rapp");
const root = createRoot(container);

React.initializeTouchEvents && React.initializeTouchEvents(true);
root.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>
);
