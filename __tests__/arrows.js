/**
 * Arrow component tests
 */

sinon.stub(console, 'error');

import {shallow} from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { NextArrow, PrevArrow } from '../src/arrows';

describe('Previous arrows', () => {
  it('should render arrow', () => {
    const wrapper = shallow(<PrevArrow />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should not result in errors', () => {
    shallow(<PrevArrow />);

    expect(console.error.called).toBe(false);
  });
});

describe('Next arrows', () => {
  it('should render arrow', () => {
    const wrapper = shallow(<NextArrow />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should not result in errors', () => {
    shallow(<NextArrow />);

    expect(console.error.called).toBe(false);
  });
});
