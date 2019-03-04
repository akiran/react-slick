import React, { Component } from "react";
import Slider from "../src/slider";

export default class EventsBehaviour extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2 draggable={false}> EventsBehaviour </h2>
        <Slider {...settings}>
          <div onClick={() => console.log("div clicked(outer element)")}>
            <h3 onClick={() => console.log("h3 clicked(inner element)")}>
              onClick is not triggerd when dragged
            </h3>
          </div>
          <a href={"www.google.com"}>
            a tag link to google. It is really janky
          </a>
          <a href={"www.google.com"} draggable={false}>
            a tag link to google. with draggable to false, text of link is not
            draggable. overall much better
          </a>
          <div>
            <a
              href={"www.google.com"}
              draggable={false}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
                textDecoration: "none",
                backgroundColor: "skyblue"
              }}
            >
              a tag link to google. tricky styling... I needed to wrap with div
              element for styling.
            </a>
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
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
