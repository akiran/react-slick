import { render, fireEvent, waitFor, screen } from "@testing-library/react";

export function getSlidesCount(container) {
  return container.getElementsByClassName("slick-slide").length;
}

export function getClonesCount(container) {
  return container.getElementsByClassName("slick-cloned").length;
}

export function getActiveSlidesCount(container) {
  return container.querySelectorAll(".slick-slide.slick-active").length;
}

export function getCurrentSlide(container) {
  return container.querySelectorAll(".slick-current");
}

export function getButtons(container) {
  return container.querySelectorAll(".slick-dots")[0].children;
}

export function hasClass(element, classname) {
  if (element.className != undefined) {
    return element.className == classname;
  }
  return false;
}
export function activeSlides(container) {
  return container.querySelectorAll(".slick-dots .slick-active");
}
export function activeSlide(container) {
  return Array.from(
    container.querySelectorAll(".slick-dots .slick-active")[0].children
  ).map(e => parseInt(e.textContent) - 1)[0];
}

export function getActiveSlides(container) {
  return container.querySelectorAll(".slick-slide.slick-active");
}

export function getActiveSlidesText(container) {
  const slides = activeSlides(container);
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
