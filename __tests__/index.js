'use strict';

import React from 'react';
import {shallow, mount} from 'enzyme';
import Slider from '../src/index';

describe('Slider', function() {
  it('should render', function() {
    const wrapper = shallow(<Slider><div>slide1</div></Slider>);
    expect(wrapper.contains(<div>slide1</div>)).toBe(true);
  });
});
