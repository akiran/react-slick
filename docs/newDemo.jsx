'use strict';

import React from 'react';
import Slider from '../src/slider';

var SingleItem = React.createClass({

  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item Demos</h2>
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>
      </div>
    );
  }
});


var Demos = React.createClass({
  render: function () {
    //need to add variable width and center mode demo
    return (
      <div className='content'>
        <SingleItem />
      </div>
    );
  }
});


module.exports = Demos;
