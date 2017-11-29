import React, { Component } from 'react'
import Slider from '../src/slider'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            trackComponent: 'ul'
        };
        return (
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <li><h3>1</h3></li>
                    <li><h3>2</h3></li>
                    <li><h3>3</h3></li>
                    <li><h3>4</h3></li>
                    <li><h3>5</h3></li>
                    <li><h3>6</h3></li>
                </Slider>
            </div>
        );
    }
}
