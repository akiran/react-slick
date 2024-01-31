import { render, fireEvent, waitFor, screen } from "@testing-library/react";

export function getSlidesCount(container) {
  return container.getElementsByClassName("slick-slide").length;
}

export function getSlides(container) {
  return container.getElementsByClassName("slick-slide");
}

export function getClonesCount(container) {
  return container.getElementsByClassName("slick-cloned").length;
}

export function getActiveSlidesCount(container) {
  return container.querySelectorAll(".slick-slide.slick-active").length;
}

export function getCurrentSlide(container) {
  return container.querySelector(".slick-current");
}

export function getCurrentSlideContent(container) {
  const slide = container.querySelector(".slick-current");
  return slide.textContent;
}

export function getButtons(container) {
  return container.querySelectorAll(".slick-dots button");
}

export function getButtonsListItem(container) {
  return container.querySelectorAll(".slick-dots")[0].children;
}
export function getButtonsLength(container) {
  return container.querySelectorAll(".slick-dots")[0].children.length;
}
export function hasClass(element, classname) {
  if (element.className != undefined) {
    return element.classList.contains(classname);
  }
  return false;
}
export function getActiveButton(container) {
  return Array.from(
    container.querySelectorAll(".slick-dots .slick-active button")
  ).map(e => e.textContent);
}
// export function getCurrentSlideIdState(container) {
//   return parseInt(getCurrentSlide(container).getAttribute("data-index")) + 1;
// }
// export function activeSlides(container) {
//   return container.querySelectorAll(".slick-slide.slick-active");
// }
export function getActiveSlide(container) {
  return container.querySelector(".slick-slide.slick-active");
}

export function getActiveSlides(container) {
  return container.querySelectorAll(".slick-slide.slick-active");
}

export function getActiveSlidesText(container) {
  const slides = getActiveSlides(container);
  return Array.from(slides).map(e => e.textContent);
}

export function clickNext(container) {
  fireEvent(
    container.getElementsByClassName("slick-next")[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
}

export function clickPrevious(container) {
  fireEvent(
    container.getElementsByClassName("slick-prev")[0],
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
}
