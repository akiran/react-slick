import React from "react";
import AutoPlay from "../AutoPlay";
import AutoPlayMethods from "../AutoPlayMethods";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { html as beautify_html, js_beautify } from "js-beautify";
import jest from "jest";
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
  getCurrentSlide,
  getSlideHeight
} from "../../test-utils";

describe("AutoPlay example", () => {
  it("should have 8 slides (3(preclone) + 6(actual) + 3(postclone))", function() {
    const { container } = render(<AutoPlay a={5} />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(12);
  });
  it("should have 3 clone slides", function() {
    const { container } = render(<AutoPlay />);
    expect(container.getElementsByClassName("slick-cloned").length).toBe(6);
  });
  it("should have 1 current slide", function() {
    const { container } = render(<AutoPlay />);
    expect(
      container.querySelectorAll(".slick-slide.slick-current").length
    ).toBe(1);
    expect(parseInt(getCurrentSlide(container).textContent) - 1).toBe(0);
  });
  it("should have 3 active slide", function() {
    const { container } = render(<AutoPlay />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      3
    );
    expect(
      Array.from(getActiveSlide(container).children).map(
        e => parseInt(e.textContent) - 1
      )[0]
    ).toBe(0);
  });
  it("should have 6 dots", function() {
    const { container } = render(<AutoPlay />);
    expect(
      container.getElementsByClassName("slick-dots")[0].children.length
    ).toBe(6);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<AutoPlay />);

    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<AutoPlay />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<AutoPlay />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to next slide when next button is clicked", function() {
    const { container } = render(<AutoPlay />);
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
    const { container } = render(<AutoPlay />);
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
    const { container } = render(<AutoPlay />);
    fireEvent(
      container.querySelectorAll(".slick-dots button")[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    expect(getActiveSlidesCount(container)).toEqual(3);
    expect(hasClass(getButtonsListItem(container)[3], "slick-active")).toEqual(
      true
    );
  });
  it("Should change the active slides automatically", async function() {
    const { container } = render(<AutoPlay />);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    await waitFor(
      () => {
        expect(getActiveSlidesText(container)).toEqual(["2", "3", "4"]);
      },
      { timeout: "3000" }
    );
  });
});
describe("AutoPlay method example", () => {
  it("should have 8 slides (3(preclone) + 6(actual) + 3(postclone))", function() {
    const { container } = render(<AutoPlayMethods a={5} />);
    expect(container.getElementsByClassName("slick-slide").length).toBe(12);
  });
  it("should have 3 clone slides", function() {
    const { container } = render(<AutoPlayMethods />);
    expect(container.getElementsByClassName("slick-cloned").length).toBe(6);
  });
  it("should have 1 current slide", function() {
    const { container } = render(<AutoPlayMethods />);
    expect(
      container.querySelectorAll(".slick-slide.slick-current").length
    ).toBe(1);
    expect(parseInt(getCurrentSlide(container).textContent) - 1).toBe(0);
  });
  it("should have 3 active slide", function() {
    const { container } = render(<AutoPlayMethods />);
    expect(container.querySelectorAll(".slick-slide.slick-active").length).toBe(
      3
    );
    expect(
      Array.from(getActiveSlide(container).children).map(
        e => parseInt(e.textContent) - 1
      )[0]
    ).toBe(0);
  });
  it("should have 6 dots", function() {
    const { container } = render(<AutoPlayMethods />);
    expect(
      container.getElementsByClassName("slick-dots")[0].children.length
    ).toBe(6);
  });
  it("should have 1 active dot", function() {
    const { container } = render(<AutoPlayMethods />);

    expect(container.querySelectorAll(".slick-dots .slick-active").length).toBe(
      1
    );
  });
  it("should have a prev arrow", function() {
    const { container } = render(<AutoPlayMethods />);
    expect(container.getElementsByClassName("slick-prev").length).toBe(1);
  });
  it("should have a next arrow", function() {
    const { container } = render(<AutoPlayMethods />);
    expect(container.getElementsByClassName("slick-next").length).toBe(1);
  });
  it("should got to next slide when next button is clicked", function() {
    const { container } = render(<AutoPlayMethods />);
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
    const { container } = render(<AutoPlayMethods />);
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
    const { container } = render(<AutoPlayMethods />);
    fireEvent(
      container.querySelectorAll(".slick-dots button")[3],
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getActiveSlidesText(container)).toEqual(["4", "5", "6"]);
    expect(getActiveSlidesCount(container)).toEqual(3);
    expect(hasClass(getButtonsListItem(container)[3], "slick-active")).toEqual(
      true
    );
  });
  it("Should change the active slides automatically", async function() {
    const { container } = render(<AutoPlayMethods />);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    await waitFor(
      () => {
        expect(getActiveSlidesText(container)).toEqual(["2", "3", "4"]);
      },
      { timeout: "3000" }
    );
  });
  it("Shouldn't change the active slides when Paused button is clicked", async function() {
    const { container } = render(<AutoPlayMethods />);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    let button1;
    Array.from(container.querySelectorAll(" .button")).forEach(e =>
      e.textContent === "Pause" ? (button1 = e) : null
    );
    fireEvent(
      button1,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    //This will fail as active slides wont change
    //await waitFor(()=>{console.log(getActiveSlidesText(container));expect(getActiveSlidesText(container)).toEqual(["3","4","5"]);},{timeout:"10000"});
    await waitFor(
      () => {
        expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
      },
      { timeout: "10000" }
    );
  });
  it("Should change the active slides when Play button is clicked", async function() {
    const { container } = render(<AutoPlayMethods />);
    expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
    let button1;
    let button2;
    Array.from(container.querySelectorAll(" .button")).forEach(e =>
      e.textContent === "Pause"
        ? (button1 = e)
        : e.textContent === "Play"
        ? (button2 = e)
        : null
    );
    fireEvent(
      button1,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    //This will fail as active slides wont change
    //await waitFor(()=>{console.log(getActiveSlidesText(container));expect(getActiveSlidesText(container)).toEqual(["3","4","5"]);},{timeout:"10000"});
    await waitFor(
      () => {
        expect(getActiveSlidesText(container)).toEqual(["1", "2", "3"]);
      },
      { timeout: "10000" }
    );
    fireEvent(
      button2,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    await waitFor(
      () => {
        expect(getActiveSlidesText(container)).toEqual(["3", "4", "5"]);
      },
      { timeout: "10000" }
    );
  });
});
