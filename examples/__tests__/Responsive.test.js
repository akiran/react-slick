import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  activeSlide,
  activeSlides,
  clickNext,
  clickPrevious,
  getActiveButton,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsLength,
  getButtonsListItem,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount,
  hasClass
} from "../../test-utils";
import Responsive from "../Responsive";

describe("Responsive Items", function() {
  it("should have 8 actual slides", function() {
    const { container } = render(<Responsive />);
    expect(getSlidesCount(container)).toEqual(8);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 4 active slides", function() {
    const { container } = render(<Responsive />);
    expect(getActiveSlidesCount(container)).toEqual(4);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 2 dots", function() {
    const { container } = render(<Responsive />);
    expect(getButtonsLength(container)).toEqual(2);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 4 slides", function() {
    const { container } = render(<Responsive />);
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3", "4"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 5 to 8 when next button is clicked", function() {
    const { container } = render(<Responsive />);
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["5", "6", "7", "8"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 4 slides when previous button is clicked from last 4 slides", function() {
    const { container } = render(<Responsive initialSlide={5} />);
    clickPrevious(container);
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3", "4"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides first 4 slides when first dot is clicked", function() {
    const { container } = render(<Responsive />);
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3", "4"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 5 to 6 when second dot is clicked", function() {
    const { container } = render(<Responsive />);
    fireEvent(
      getButtons(container)[1],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["5", "6", "7", "8"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
