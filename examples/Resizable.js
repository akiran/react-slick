import React, { useState } from "react";
import Slider from "../src/slider";

export default function Resizable() {
  const [style, setStyle] = useState({
    display: true,
    width: 600
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <h2> Resizable Collapsible </h2>
      <button
        className="button"
        onClick={() =>
          setStyle(prevS => ({ ...prevS, width: prevS.width + 100 }))
        }
      >
        {" "}
        increase{" "}
      </button>
      <button
        className="button"
        onClick={() =>
          setStyle(prevS => ({ ...prevS, width: prevS.width - 100 }))
        }
      >
        {" "}
        decrease{" "}
      </button>
      <button
        className="button"
        onClick={() =>
          setStyle(prevS => ({ ...prevS, display: !prevS.display }))
        }
      >
        {" "}
        toggle{" "}
      </button>
      <div
        style={{
          width: style.width + "px",
          display: style.display ? "block" : "none"
        }}
      >
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
    </div>
  );
}
