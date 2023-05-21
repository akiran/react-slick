import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Slider from "../src/index";
import {
  getActiveSlide,
  clickNext,
  clickPrevious,
  getCurrentSlide
} from "../test-utils";

class SliderWithAfterChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: null
    };
    this.afterChange = this.afterChange.bind(this);
  }

  afterChange(currentSlide) {
    console.log(currentSlide, "afterChange");
    this.setState({
      currentSlide
    });
  }
  render() {
    return (
      <Slider afterChange={this.afterChange}>
        <div>slide1</div>
        <div>slide2</div>
        <div>slide3</div>
        <div>slide4</div>
      </Slider>
    );
  }
}

test("fake test", () => {
  expect(1).toBe(1);
});
describe("After change Slider", function() {
  it("should render", function() {
    const { container } = render(<SliderWithAfterChange />);
    clickNext(container);
    setTimeout(() => {
      expect(getActiveSlide(container).textContent).toEqual("slide2");
    }, 1000);
    clickNext(container);
    setTimeout(() => {
      expect(getActiveSlide(container).textContent).toEqual("slide3");
    }, 1000);
    clickPrevious(container);
    setTimeout(() => {
      expect(getActiveSlide(container).textContent).toEqual("slide2");
    }, 1000);
  });
});
