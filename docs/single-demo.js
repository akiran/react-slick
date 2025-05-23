"use strict";

import React from "react";
import { createRoot } from "react-dom/client";
import Slider from "../src/slider";
import MultipleItems from "../examples/MultipleItems";
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

function App() {
  return (
    <div className="content">
      {/* <SimpleSlider /> */}
      <MultipleItems />
    </div>
  );
}

const container = document.getElementById("rapp");
const root = createRoot(container);

React.initializeTouchEvents && React.initializeTouchEvents(true);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
