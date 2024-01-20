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
import DynamicSlides from "../DynamicSlides";

describe("Multiple Items", function() {
  it("should have 9 actual slides and (3(pre) + 3(post)) clone slides", function() {
    const { container } = render(<DynamicSlides />);
    expect(getSlidesCount(container)).toEqual(12);
    expect(getClonesCount(container)).toEqual(6);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const { container } = render(<DynamicSlides />);
    expect(getActiveSlidesCount(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 2 dots", function() {
    const { container } = render(<DynamicSlides />);
    expect(getButtonsLength(container)).toEqual(2);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const { container } = render(<DynamicSlides />);
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const { container } = render(<DynamicSlides />);
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when previous button is clicked", function() {
    const { container } = render(<DynamicSlides />);
    clickPrevious(container);
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides first 3 slides when first dot is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when last dot is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      getButtons(container)[1],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 9 actual slides and (3(pre) + 3(post)) clone slides", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getSlidesCount(container)).toEqual(15);
    expect(getClonesCount(container)).toEqual(6);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 active slides", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesCount(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should have 3 dots", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getButtonsLength(container)).toEqual(3);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show first 3 slides", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when next button is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    clickNext(container);
    // Array.from(container.querySelectorAll(".slick-current")).map(e=>console.log(e.textContent))
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when previous button is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    clickPrevious(container);
    expect(getActiveButton(container)).toEqual(["3"]);
    expect(getActiveSlidesText(container)).toEqual(["7", "8", "9"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides first 3 slides when first dot is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    fireEvent(
      getButtons(container)[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["1"]);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show slides from 4 to 6 when middle dot is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    fireEvent(
      getButtons(container)[1],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["2"]);
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("should show last 3 slides when last dot is clicked", function() {
    const { container } = render(<DynamicSlides />);
    fireEvent(
      container.getElementsByClassName("button")[0],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    fireEvent(
      getButtons(container)[2],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveButton(container)).toEqual(["3"]);
    expect(getActiveSlidesText(container)).toEqual(["7", "8", "9"]);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
