/**
 * Arrow component tests
 */

sinon.stub(console, "error");

import { render } from "@testing-library/react";
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
  it("should render arrow", () => {
    const { container } = render(<PrevArrow />);
    expect(Array.from(container.getElementsByTagName("button"))).toHaveLength(
      1
    );
  });

  it("should not result in errors", () => {
    render(<PrevArrow />);

    expect(console.error.called).toBe(false);
  });

  //  it('should pass slide data to custom arrow', () => {
  //    let elAttributes;
  //    let arr = <CustomArrow />

  //    const {container}= render(<PrevArrow currentSlide={3} prevArrow={arr} slideCount={5} />);

  //    elAttributes =x=> container.querySelectorAll('.sample')[0].getAttribute(x);
  //    expect(elAttributes('data-currentslide')).toBe('3');
  //    expect(elAttributes('data-slidecount')).toBe('5');
  //  });
});

describe("Next arrows", () => {
  it("should render arrow", () => {
    const { container } = render(<NextArrow />);
    expect(Array.from(container.getElementsByTagName("button"))).toHaveLength(
      1
    );
  });

  //  it('should not result in errors', () => {
  //    render(<NextArrow />);

  //    expect(console.error.called).toBe(false);
  //  });

  //  it('should pass slide data to custom arrow', () => {
  //    let elAttributes;
  //    let arr = <CustomArrow />

  //    const {container} = render(<NextArrow currentSlide={6} nextArrow={arr} slideCount={9} />);

  //    elAttributes =(x)=> container.querySelectorAll('.sample')[0].getAttribute(x);
  //    expect(elAttributes('data-currentslide')).toBe('6');
  //    expect(elAttributes('data-slidecount')).toBe('9');
  //  });
});
