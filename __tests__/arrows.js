/**
 * Arrow component tests
 */

sinon.stub(console, "error");

import { render, mount, shallow } from "enzyme";
import React from "react";
import sinon from "sinon";

import { NextArrow, PrevArrow } from "../src/arrows";

function CustomArrow(props) {
  return (
    <span
      className="sample"
      data-currentSlide={props.currentSlide}
      data-slideCount={props.slideCount}
    />
  );
}

describe("Previous arrows", () => {
  it("should render button as default", () => {
    const wrapper = shallow(<PrevArrow />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should not result in errors", () => {
    shallow(<PrevArrow />);

    expect(console.error.called).toBe(false);
  });

  it("should render functional component custom arrow", () => {
    const CustomArrow = props => {
      return (
        <span className="customArrow" onClick={props.onClick}>
          Previous
        </span>
      );
    };

    const wrapper = mount(<PrevArrow prevArrow={<CustomArrow />} />);

    expect(wrapper.find("span.customArrow")).toHaveLength(1);
    expect(console.error.called).toBe(false);
  });

  it("sould render React element custom arrow", () => {
    const customHandlingOfPrevClick = () => null;

    const customImageArrow = (
      <img className="customArrowImage" onClick={customHandlingOfPrevClick} />
    );

    const wrapper = mount(<PrevArrow prevArrow={customImageArrow} />);

    expect(wrapper.find("img.customArrowImage")).toHaveLength(1);
    expect(console.error.called).toBe(false);
  });

  // it('should pass slide data to custom arrow', () => {
  //   let elAttributes;
  //   let arr = <CustomArrow />
  //
  //   const wrapper = render(<PrevArrow currentSlide={3} prevArrow={arr} slideCount={5} />);
  //
  //   elAttributes = wrapper.find('.sample')[0].attribs;
  //   expect(elAttributes['data-currentslide']).toBe('3');
  //   expect(elAttributes['data-slidecount']).toBe('5');
  // });
});

describe("Next arrows", () => {
  it("should render button as default", () => {
    const wrapper = shallow(<NextArrow />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("should not result in errors", () => {
    shallow(<NextArrow />);

    expect(console.error.called).toBe(false);
  });

  it("should render functional component custom arrow", () => {
    const CustomArrow = props => {
      return (
        <span className="customArrow" onClick={props.onClick}>
          Next
        </span>
      );
    };

    const wrapper = mount(<NextArrow nextArrow={<CustomArrow />} />);

    expect(wrapper.find("span.customArrow")).toHaveLength(1);
    expect(console.error.called).toBe(false);
  });

  it("sould render React element custom arrow", () => {
    const customHandlingOfNextClick = () => null;

    const customImageArrow = (
      <img className="customArrowImage" onClick={customHandlingOfNextClick} />
    );

    const wrapper = mount(<NextArrow nextArrow={customImageArrow} />);

    expect(wrapper.find("img.customArrowImage")).toHaveLength(1);
    expect(console.error.called).toBe(false);
  });

  // it('should pass slide data to custom arrow', () => {
  //   let elAttributes;
  //   let arr = <CustomArrow />
  //
  //   const wrapper = render(<NextArrow currentSlide={6} nextArrow={arr} slideCount={9} />);
  //
  //   elAttributes = wrapper.find('.sample')[0].attribs;
  //   expect(elAttributes['data-currentslide']).toBe('6');
  //   expect(elAttributes['data-slidecount']).toBe('9');
  // });
});
