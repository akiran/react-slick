'use strict';

import React from 'react';
import Slider from '../src/slider';

import AdaptiveHeight from '../examples/AdaptiveHeight'
import AutoPlay from '../examples/AutoPlay'
import CenterMode from '../examples/CenterMode'
import CustomArrows from '../examples/CustomArrows'
import CustomPaging from '../examples/CustomPaging'
import CustomSlides from '../examples/CustomSlides'
import DynamicSlides  from '../examples/DynamicSlides'
import Fade from '../examples/Fade'
import FocusOnSelect from '../examples/FocusOnSelect'
import LazyLoad from '../examples/LazyLoad'
import MultipleItems from '../examples/MultipleItems'
import Pause from '../examples/Pause';
import PauseOnHover from '../examples/PauseOnHover'
import PreviousNextMethods from '../examples/PreviousNextMethods'
import Responsive from '../examples/Responsive'
import Rtl from '../examples/Rtl'
import SimpleSlider from '../examples/SimpleSlider'
import SlickGoTo from '../examples/SlickGoTo'
import SlideChangeHooks from '../examples/SlideChangeHooks'
import SwipeToSlide from '../examples/SwipeToSlide'
import UnevenSetsInfinite from '../examples/UnevenSetsInfinite'
import UnevenSetsFinite from '../examples/UnevenSetsFinite'
import VariableWidth from '../examples/VariableWidth'
import VerticalMode  from '../examples/VerticalMode'
import VerticalSwipeToSlide from '../examples/VerticalSwipeToSlide'

export default class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <SimpleSlider />
        <MultipleItems />
        <Responsive />
        <UnevenSetsInfinite />
        <UnevenSetsFinite />
        <CenterMode />
        <FocusOnSelect /> 
        <AutoPlay /> 
        <Pause />
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

      </div>
    );
  }
}
