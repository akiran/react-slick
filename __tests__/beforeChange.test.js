import React from "react";
import { render } from "@testing-library/react";
import Slider from "../src/index";
import {
  getActiveSlide,
  clickNext,
  clickPrevious,
  getCurrentSlide
} from "../test-utils";

class SliderWithBeforeChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: null,
      nextSlide: null
    };
    this.beforeChange = this.beforeChange.bind(this);
  }
  beforeChange(currentSlide, nextSlide) {
    this.setState({
      currentSlide,
      nextSlide
    });
  }
  render() {
    return (
      <Slider waitForAnimate={false} beforeChange={this.beforeChange}>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
      </Slider>
    );
  }
}

describe("Slider", function() {
  it("should render", function() {
    const { container } = render(<SliderWithBeforeChange />);
    clickNext(container);
    expect(getActiveSlide(container).textContent).toEqual("slide2");
    clickNext(container);
    expect(getActiveSlide(container).textContent).toEqual("slide3");
    clickPrevious(container);
    expect(getActiveSlide(container).textContent).toEqual("slide2");
  });
});
