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
import MultipleRows from "../MultipleRows";

describe("Multiple Items", function() {
  it("should have 9 actual slides and (3(pre) + 3(post)) clone slides", function() {
    const { container } = render(<MultipleRows />);
    expect(getSlidesCount(container)).toEqual(12);
    expect(getClonesCount(container)).toEqual(8);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const { container } = render(<MultipleRows />);
    expect(getActiveSlidesCount(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const { container } = render(<MultipleRows />);
    expect(getActiveSlidesText(container)).toEqual([
      "13141516",
      "1234",
      "5678"
    ]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const { container } = render(<MultipleRows />);
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))
    expect(getActiveSlidesText(container)).toEqual(["1234", "5678", "9101112"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when previous button is clicked", function() {
    const { container } = render(<MultipleRows />);
    clickPrevious(container);
    expect(getActiveSlidesText(container)).toEqual([
      "9101112",
      "13141516",
      "1234"
    ]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
