"use strict";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react";
import { InnerSlider } from "./inner-slider";
import json2mq from "json2mq";
import defaultProps from "./default-props";
import { canUseDOM } from "./utils/innerSliderUtils";
const enquire = canUseDOM() && require("enquire.js");

export const Slider = forwardRef((props, ref) => {
  const [breakpoint, setBreakpoint] = useState(null);
  const refInnerSlider = useRef();

  useImperativeHandle(ref, () => ({
    slickPrev() {
      refInnerSlider.current.slickPrev();
    },

    slickNext() {
      refInnerSlider.current.slickNext();
    },

    slickGoTo(slide, dontAnimate = false) {
      refInnerSlider.current.slickGoTo(slide, dontAnimate);
    },
    slickPlay(playType) {
      refInnerSlider.current.autoPlay(playType);
    },
    slideHandler(index) {
      refInnerSlider.current.slideHandler(index);
    }
  }));

  let _responsiveMediaHandlers = [];

  function media(query, handler) {
    // javascript handler for  css media query
    enquire.register(query, handler);
    _responsiveMediaHandlers.push({ query, handler });
  }
  // handles responsive breakpoints
  useEffect(() => {
    // performance monitoring
    //if (process.env.NODE_ENV !== 'production') {
    //const { whyDidYouUpdate } = require('why-did-you-update')
    //whyDidYouUpdate(React)
    //}
    if (props.responsive) {
      let breakpoints = props.responsive.map(breakpt => breakpt.breakpoint);
      // sort them in increasing order of their numerical value
      breakpoints.sort((x, y) => x - y);

      breakpoints.forEach((breakpoint, index) => {
        // media query for each breakpoint
        let bQuery;
        if (index === 0) {
          bQuery = json2mq({ minWidth: 0, maxWidth: breakpoint });
        } else {
          bQuery = json2mq({
            minWidth: breakpoints[index - 1] + 1,
            maxWidth: breakpoint
          });
        }
        // when not using server side rendering
        canUseDOM() &&
          media(bQuery, () => {
            setBreakpoint(breakpoint);
          });
      });

      // Register media query for full screen. Need to support resize from small to large
      // convert javascript object to media query string
      let query = json2mq({ minWidth: breakpoints.slice(-1)[0] });

      canUseDOM() &&
        media(query, () => {
          setBreakpoint(null);
        });
    }
  }, []);

  useEffect(() => {
    _responsiveMediaHandlers.forEach(function(obj) {
      enquire.unregister(obj.query, obj.handler);
    });
  }, [_responsiveMediaHandlers]);

  var settings;
  var newProps;
  if (breakpoint) {
    newProps = props.responsive.filter(resp => resp.breakpoint === breakpoint);
    settings =
      newProps[0].settings === "unslick"
        ? "unslick"
        : { ...defaultProps, ...props, ...newProps[0].settings };
  } else {
    settings = { ...defaultProps, ...props };
  }

  // force scrolling by one if centerMode is on
  if (settings.centerMode) {
    if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
      console.warn(
        `slidesToScroll should be equal to 1 in centerMode, you are using ${settings.slidesToScroll}`
      );
    }
    settings.slidesToScroll = 1;
  }
  // force showing one slide and scrolling by one if the fade mode is on
  if (settings.fade) {
    if (settings.slidesToShow > 1 && process.env.NODE_ENV !== "production") {
      console.warn(
        `slidesToShow should be equal to 1 when fade is true, you're using ${settings.slidesToShow}`
      );
    }
    if (settings.slidesToScroll > 1 && process.env.NODE_ENV !== "production") {
      console.warn(
        `slidesToScroll should be equal to 1 when fade is true, you're using ${settings.slidesToScroll}`
      );
    }
    settings.slidesToShow = 1;
    settings.slidesToScroll = 1;
  }

  // makes sure that children is an array, even when there is only 1 child
  let children = React.Children.toArray(props.children);

  // Children may contain false or null, so we should filter them
  // children may also contain string filled with spaces (in certain cases where we use jsx strings)
  children = children.filter(child => {
    if (typeof child === "string") {
      return !!child.trim();
    }
    return !!child;
  });

  // rows and slidesPerRow logic is handled here
  if (
    settings.variableWidth &&
    (settings.rows > 1 || settings.slidesPerRow > 1)
  ) {
    console.warn(
      `variableWidth is not supported in case of rows > 1 or slidesPerRow > 1`
    );
    settings.variableWidth = false;
  }
  let newChildren = [];
  let currentWidth = null;
  for (
    let i = 0;
    i < children.length;
    i += settings.rows * settings.slidesPerRow
  ) {
    let newSlide = [];
    for (
      let j = i;
      j < i + settings.rows * settings.slidesPerRow;
      j += settings.slidesPerRow
    ) {
      let row = [];
      for (let k = j; k < j + settings.slidesPerRow; k += 1) {
        if (settings.variableWidth && children[k].props.style) {
          currentWidth = children[k].props.style.width;
        }
        if (k >= children.length) break;
        row.push(
          React.cloneElement(children[k], {
            key: 100 * i + 10 * j + k,
            tabIndex: -1,
            style: {
              width: `${100 / settings.slidesPerRow}%`,
              display: "inline-block"
            }
          })
        );
      }
      newSlide.push(<div key={10 * i + j}>{row}</div>);
    }
    if (settings.variableWidth) {
      newChildren.push(
        <div key={i} style={{ width: currentWidth }}>
          {newSlide}
        </div>
      );
    } else {
      newChildren.push(<div key={i}>{newSlide}</div>);
    }
  }

  if (settings === "unslick") {
    const className = "regular slider " + (props.className || "");
    return <div className={className}>{children}</div>;
  } else if (newChildren.length <= settings.slidesToShow) {
    settings.unslick = true;
  }

  return (
    <InnerSlider ref={refInnerSlider} style={props.style} {...settings}>
      {newChildren}
    </InnerSlider>
  );
});
export default Slider;
