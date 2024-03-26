import React from "react";
import SimpleSlider from "../SimpleSlider";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { html as beautify_html } from "js-beautify";
import {
  getActiveSlide,
  clickNext,
  clickPrevious,
  hasClass,
  getActiveSlides,
  getActiveSlidesCount,
  getActiveSlidesText,
  getButtons,
  getButtonsListItem,
  getCurrentSlide
} from "../../test-utils";

describe("SimpleSlider example", () => {
  it("should have 13 slides (1(preclone) + 6(actual) + 6(postclone))", function() {
    const { container } = render(<SimpleSlider a={5} />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(13);
  });
  it("should have 7 clone slides", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-cloned").length).toBe(7);
  });
  it("should have 1 current slide", function() {
    const { container } = render(<SimpleSlider />);
    expect(
      container.querySelectorAll(".slick-slide.slick-current").length
    ).toBe(1);
    expect(parseInt(getCurrentSlide(container).textContent) - 1).toBe(0);
  });
  it("should have 1 active slide", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      1
    );
    expect(
      Array.from(getActiveSlide(container).children).map(
        e => parseInt(e.textContent) - 1
      )[0]
    ).toBe(0);
  });
  it("should have 6 dots", function() {
    const { container } = render(<SimpleSlider />);
    expect(
      container.getElementsByClassName("slick-dots")[0].children.length
    ).toBe(6);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<SimpleSlider />);

    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<SimpleSlider />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to next slide when next button is clicked", function() {
    const { container } = render(<SimpleSlider />);
    clickNext(container);
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("2");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.querySelectorAll(".slick-dots")[0].children[1]
    ).toHaveClass("slick-active");
  });
  it("should goto previous slide when prev button is clicked", function() {
    const { container } = render(<SimpleSlider />);
    clickPrevious(container);
    expect(
      container.querySelectorAll(".slick-slide.slick-active")[0].textContent
    ).toBe("6");
    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
    expect(
      container.querySelectorAll(".slick-dots")[0].children[5]
    ).toHaveClass("slick-active");
  });
  it("should goto 4th slide when 4th dot is clicked", function() {
    const { container } = render(<SimpleSlider />);
    fireEvent(
      container.querySelectorAll(".slick-dots button")[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)[0]).toEqual("4");
    expect(getActiveSlidesCount(container)).toEqual(1);
    expect(hasClass(getButtonsListItem(container)[3], "slick-active")).toEqual(
      true
    );
  });
});

describe("Simple Slider Snapshots", function() {
  it("slider initial state", function() {
    const { container } = render(<SimpleSlider />);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("click on next button", function() {
    const { container } = render(<SimpleSlider />);
    clickNext(container);
    //expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("click on prev button", function() {
    const { container } = render(<SimpleSlider />);
    clickPrevious(container);
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
  it("click on 3rd dot", function() {
    const { container } = render(<SimpleSlider />);
    fireEvent(
      getButtons(container)[2],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    // expect(beautify_html(toString(container))).toMatchSnapshot();
  });
});
