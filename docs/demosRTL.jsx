'use strict';

import React from 'react';
import Slider from '../src/slider';

import SimpleSliderRTL from '../examples/SimpleSliderRTL'
import MultipleItemsRTL from '../examples/MultipleItemsRTL'
import ResponsiveRTL from '../examples/ResponsiveRTL'
import AdaptiveHeightRTL from '../examples/AdaptiveHeightRTL'
import SimpleSlider from '../examples/SimpleSlider'
import MultipleItems from '../examples/MultipleItems'

export default class App extends React.Component {
  render() {
    return (
    <div>


      <div dir='rtl' className='content'>
        <div className='title-bar primary'>
          <span className='title'>React Slick RTL - html attribute</span>
        </div>
        <SimpleSliderRTL />
        <MultipleItemsRTL />
        <ResponsiveRTL />
        <AdaptiveHeightRTL />
        {
        // The following three are to demonstrate the default scroller behaviour
        // inside rtl-pages.
        }
        <SimpleSlider />
        <MultipleItems />
      </div>
      <div style={{ direction: 'rtl' }} className='content'>
        <div className='title-bar primary'>
          <span className='title'>React Slick RTL - inline style</span>
        </div>
        <SimpleSliderRTL />
        <MultipleItemsRTL />
        <ResponsiveRTL />
        <AdaptiveHeightRTL />
        {
        // The following three are to demonstrate the default scroller behaviour
        // inside rtl-pages.
        }
        <SimpleSlider />
        <MultipleItems />
      </div>
    </div>
    );
  }
}
