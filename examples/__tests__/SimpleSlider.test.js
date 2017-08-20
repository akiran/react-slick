'use strict';
import React from 'react';
import {shallow, mount} from 'enzyme';
import SimpleSlider from '../SimpleSlider';

describe('sample enzyme test', function() {
  it('should have 8 slides (6 actual and 2 clone slides)', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-slide').length).toEqual(8);
  });
  it('should have 2 clone slides', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-cloned').length).toEqual(2);
  });
  it('should have 1 active slide', function() {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-slide.slick-active').length).toEqual(1);
  });
});
