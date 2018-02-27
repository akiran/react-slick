'use strict';

import React from 'react';
import Slider from '../src/slider';

import SimpleSlider from '../examples/SimpleSliderRTL'
import MultipleItems from '../examples/MultipleItemsRTL'
import Responsive from '../examples/ResponsiveRTL'
import AdaptiveHeight from '../examples/AdaptiveHeightRTL'

export default class App extends React.Component {
  render() {
    return (
      <div dir='rtl' className='content'>
        <SimpleSlider />
        <MultipleItems />
        <Responsive />
        <AdaptiveHeight />
      </div>
    );
  }
}
