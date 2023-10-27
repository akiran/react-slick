import React from "react";
import Slider from "../src/slider";

function MultipleRowsFirstSingleImage() {
  const settings = {
    firstImageSingle: true,
    rows: 2,
    infinite: false,
    centerMode: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
    <div>
      <h2>Multiple Rows With Single First Image</h2>
      <Slider {...settings}>
        <div style={{ width: 600 }}>
          <h3>1</h3>
        </div>
        <div style={{ width: 300 }}>
          <h3>2</h3>
        </div>
        <div style={{ width: 300 }}>
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
        <div>
          <h3>10</h3>
        </div>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>12</h3>
        </div>
        <div>
          <h3>13</h3>
        </div>
        <div>
          <h3>14</h3>
        </div>
        <div>
          <h3>15</h3>
        </div>
        <div>
          <h3>16</h3>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleRowsFirstSingleImage;
