"use strict";

import React from "react";
import Slider from "../src/slider";

import SimpleSlider from "../examples/SimpleSlider";
import SlideChangeHooks from "../examples/SlideChangeHooks";
import MultipleItems from "../examples/MultipleItems";
import MultipleRows from "../examples/MultipleRows";
import Responsive from "../examples/Responsive";
import Resizable from "../examples/Resizable";
import UnevenSetsInfinite from "../examples/UnevenSetsInfinite";
import UnevenSetsFinite from "../examples/UnevenSetsFinite";
import CenterMode from "../examples/CenterMode";
import FocusOnSelect from "../examples/FocusOnSelect";
import AutoPlay from "../examples/AutoPlay";
import AutoPlayMethods from "../examples/AutoPlayMethods";
import PauseOnHover from "../examples/PauseOnHover";
import Rtl from "../examples/Rtl";
import VariableWidth from "../examples/VariableWidth";
import AdaptiveHeight from "../examples/AdaptiveHeight";
import LazyLoad from "../examples/LazyLoad";
import Fade from "../examples/Fade";
import SlickGoTo from "../examples/SlickGoTo";
import CustomArrows from "../examples/CustomArrows";
import PreviousNextMethods from "../examples/PreviousNextMethods";
import DynamicSlides from "../examples/DynamicSlides";
import VerticalMode from "../examples/VerticalMode";
import SwipeToSlide from "../examples/SwipeToSlide";
import VerticalSwipeToSlide from "../examples/VerticalSwipeToSlide";
import CustomPaging from "../examples/CustomPaging";
import CustomSlides from "../examples/CustomSlides";
import AsNavFor from "../examples/AsNavFor";
import AppendDots from "../examples/AppendDots";

export default class App extends React.Component {
  render() {
    return (
      <div className="content">
        <SimpleSlider />
        <MultipleItems />
        <MultipleRows />
        <Responsive />
        <Resizable />
        <UnevenSetsInfinite />
        <UnevenSetsFinite />
        <CenterMode />
        <FocusOnSelect />
        <AutoPlay />
        <AutoPlayMethods />
        <PauseOnHover />
        <Rtl />
        <VariableWidth />
        <AdaptiveHeight />
        <LazyLoad />
        <Fade />
        <SlideChangeHooks />
        <SlickGoTo />
        <CustomPaging />
        <CustomArrows />
        <CustomSlides />
        <PreviousNextMethods />
        <DynamicSlides />
        <VerticalMode />
        <SwipeToSlide />
        <VerticalSwipeToSlide />
        <AsNavFor />
        <AppendDots />
      </div>
    );
  }
}
