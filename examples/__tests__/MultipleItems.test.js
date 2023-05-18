import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  activeSlide,
  activeSlides,
  clickNext,
  clickPrevious,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsLength,
  getClonesCount,
  getCurrentSlide,
  getSlidesCount
} from "../../test-utils";
import MultipleItems from "../MultipleItems";

describe("Multiple Items", function() {
  it("should have 9 actual slides and (3(pre) + 9(post)) clone slides", function() {
    const { container } = render(<MultipleItems />);
    expect(getSlidesCount(container)).toEqual(21);
    expect(getClonesCount(container)).toEqual(12);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const { container } = render(<MultipleItems />);
    expect(getActiveSlidesCount(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 dots", function() {
    const { container } = render(<MultipleItems />);
    expect(getButtonsLength(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const { container } = render(<MultipleItems />);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const { container } = render(<MultipleItems />);
    clickNext(container);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when previous button is clicked", function() {
    const { container } = render(<MultipleItems />);
    clickPrevious(container);
    expect(getActiveSlidesText(container)).toEqual(["7", "8", "9"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides first 3 slides when first dot is clicked", function() {
    const { container } = render(<MultipleItems />);
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when middle dot is clicked", function() {
    const { container } = render(<MultipleItems />);
    fireEvent(
      getButtons(container)[1],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when last dot is clicked", function() {
    const { container } = render(<MultipleItems />);
    fireEvent(
      getButtons(container)[2],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)).toEqual(["7", "8", "9"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
