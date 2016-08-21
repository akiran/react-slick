'use strict';

import React from 'react';
import Slider from '../src/slider';

import SimpleSlider from '../examples/SimpleSlider'
import SlideChangeHooks from '../examples/SlideChangeHooks'
import MultipleItems from '../examples/MultipleItems'
import Responsive from '../examples/Responsive'
import UnevenSets from '../examples/UnevenSets'
import CenterMode from '../examples/CenterMode'
import FocusOnSelect from '../examples/FocusOnSelect'
import AutoPlay from '../examples/AutoPlay'
import PauseOnHover from '../examples/PauseOnHover'
import Rtl from '../examples/Rtl'
import VariableWidth from '../examples/VariableWidth'
import AdaptiveHeight from '../examples/AdaptiveHeight'
import LazyLoad from '../examples/LazyLoad'
import Fade from '../examples/Fade'
import SlickGoTo from '../examples/SlickGoTo'
import CustomArrows from '../examples/CustomArrows'
import DynamicSlides  from '../examples/DynamicSlides'

export default class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <SimpleSlider />
        <MultipleItems />
        <Responsive />
        <UnevenSets />
        <CenterMode />
        <FocusOnSelect />
        <AutoPlay />
        <PauseOnHover />
        <Rtl />
        <VariableWidth />
        <AdaptiveHeight />
        <LazyLoad />
        <Fade />
        <SlideChangeHooks />
        <SlickGoTo />
        <CustomArrows />
        <DynamicSlides />
      </div>
    );
  }
}
