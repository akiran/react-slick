import React from "react";
import { render } from "@testing-library/react";
import Fade from "../Fade";
import { activeSlide, clickNext, clickPrevious } from "../../test-utils";

describe("Fade", () => {
  it("should change slides when clicked on next & prev buttons", () => {
    const { container } = render(<Fade />);
    let activeslide = activeSlide(container);
    expect(parseInt(activeslide.getAttribute("data-index"))).toEqual(0);
    clickNext(container);
    activeslide = activeSlide(container);
    expect(parseInt(activeslide.getAttribute("data-index"))).toEqual(1);
    clickPrevious(container);
    activeslide = activeSlide(container);
    expect(parseInt(activeslide.getAttribute("data-index"))).toEqual(0);
  });
});
