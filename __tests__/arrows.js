/**
 * Arrow component tests
 */

sinon.stub(console, 'error');

import {render, shallow} from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import { NextArrow, PrevArrow } from '../src/arrows';

function CustomArrow(props) {
  return (
    <span
      className="sample"
      data-currentSlide={props.currentSlide}
      data-slideCount={props.slideCount} />
  );
}

describe('Previous arrows', () => {
  it('should render arrow', () => {
    const wrapper = shallow(<PrevArrow />);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should not result in errors', () => {
    shallow(<PrevArrow />);

    expect(console.error.called).toBe(false);
  });

  it('should pass slide data to custom arrow', () => {
    let elAttributes;
    let arr = <CustomArrow />

    const wrapper = render(<PrevArrow currentSlide={3} prevArrow={arr} slideCount={5} />);

    elAttributes = wrapper.find('.sample')[0].attribs;
    expect(elAttributes['data-currentslide']).toBe('3');
    expect(elAttributes['data-slidecount']).toBe('5');
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

  it('should pass slide data to custom arrow', () => {
    let elAttributes;
    let arr = <CustomArrow />

    const wrapper = render(<NextArrow currentSlide={6} nextArrow={arr} slideCount={9} />);

    elAttributes = wrapper.find('.sample')[0].attribs;
    expect(elAttributes['data-currentslide']).toBe('6');
    expect(elAttributes['data-slidecount']).toBe('9');
  });
});
