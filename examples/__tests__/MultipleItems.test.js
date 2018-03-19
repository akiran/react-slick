import React from 'react';
import { mount } from 'enzyme';
import MultipleItems from '../MultipleItems';
import { html as beautify_html } from 'js-beautify'

describe('Multiple Items', function () {
  it('should have 9 actual slides and (3(pre) + 9(post)) clone slides', function () {
    const wrapper = mount(<MultipleItems />);
    expect(wrapper.find('.slick-slide').length).toEqual(21);
    expect(wrapper.find('.slick-cloned').length).toEqual(12);
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should have 3 active slides', function () {
    const wrapper = mount(<MultipleItems />);
    expect(wrapper.find('.slick-slide.slick-active').length).toEqual(3);
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should have 3 dots', function () {
    const wrapper = mount(<MultipleItems />);
    expect(wrapper.find('.slick-dots button').length).toEqual(3);
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should show first 3 slides', function () {
    const wrapper = mount(<MultipleItems />);
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("1");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("2");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("3");
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should show slides from 4 to 6 when next button is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("4");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("5");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("6");
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should show last 3 slides when previous button is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-prev').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("7");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("8");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("9");
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should show slides first 3 slides when middle dot is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-dots button').at(0).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("1");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("2");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("3");
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should show slides from 4 to 6 when middle dot is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-dots button').at(1).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("4");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("5");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("6");
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it('should show last 3 slides when last dot is clicked', function () {
    const wrapper = mount(<MultipleItems />);
    wrapper.find('.slick-dots button').at(2).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual("7");
    expect(wrapper.find('.slick-slide.slick-active').at(1).text()).toEqual("8");
    expect(wrapper.find('.slick-slide.slick-active').last().text()).toEqual("9");
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });

})
