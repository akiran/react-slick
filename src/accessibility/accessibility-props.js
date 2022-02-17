import React from "react";

const accessibilityProps = {
    arrowsPlacement: null, // beforeSlides | afterSlides | split
    useAutoplayToggleButton: true,
    useGroupRole: true,
    instructionsText: null,
    playIcon: (
      <span className="slick-play-icon" aria-hidden="true"></span>
    ),
    pauseIcon: (
      <span className="slick-pause-icon" aria-hidden="true"></span>
    ),
    nextArrow: (
      <button className="slick-next" type="button">
        <span className="slick-next-icon" aria-hidden="true"></span>
        <span className="slick-sr-only">Next</span>
      </button>
    ),
    prevArrow: (
      <button className="slick-prev" type="button">
        <span className="slick-prev-icon" aria-hidden="true"></span>
        <span className="slick-sr-only">Previous</span>
      </button>
    ),
    regionLabel: 'carousel',  
    focusOnSelect: false,
  }

  export default accessibilityProps;