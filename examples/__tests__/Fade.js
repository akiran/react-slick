import React from "react";
import { render } from "@testing-library/react";
import Fade from "../Fade";
import { getActiveSlide, clickNext, clickPrevious } from "../../test-utils";

describe("Fade", () => {
  it("should change slides when clicked on next & prev buttons", () => {
    const { container } = render(<Fade />);
    let activeslide = getActiveSlide(container);
    expect(parseInt(activeslide.getAttribute("data-index"))).toEqual(0);
    clickNext(container);
    activeslide = getActiveSlide(container);
    expect(parseInt(activeslide.getAttribute("data-index"))).toEqual(1);
    clickPrevious(container);
    activeslide = getActiveSlide(container);
    expect(parseInt(activeslide.getAttribute("data-index"))).toEqual(0);
  });
});
