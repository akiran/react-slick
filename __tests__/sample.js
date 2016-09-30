'use strict';
import React from 'react';
import {shallow, mount} from 'enzyme';
import Slider from '../src/index';



describe('basic test', function() {
  it('should add numbers', function() {
   expect(2 + 2).toBe(4);
  });
});

describe('sample enzyme test', function() {
  it('should render', function() {
    const wrapper = shallow(<Slider><div>slide1</div></Slider>);
    expect(wrapper.contains(<div>slide1</div>)).toBe(true);
  });
});

