import React from 'react';
import { mount } from 'enzyme';
import SimpleSlider from '../SimpleSlider';
import { repeatClicks } from '../../test-helpers';
import { html as beautify_html } from 'js-beautify'

import { getReactSlickDetails } from '../../__tests__/reactSlickUtils'
import { getJQuerySlickDetails } from '../../__tests__/jQSlickUtils'

describe('Simple Slider', function () {
  it('should have 13 slides (1(preclone) + 6(actual) + 6(postclone))', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-slide').length).toEqual(13);
  });
  it('should have 7 clone slides', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-cloned').length).toEqual(7);
  });
  it('should have 1 active slide', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-slide.slick-active').length).toEqual(1);
  });
  it('should have 6 dots', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-dots').children().length).toEqual(6);
  });
  it('should have 1 active dot', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
  });
  it('should have a prev arrow', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-prev').length).toEqual(1);
  });
  it('should have a next arrow', function () {
    const wrapper = mount(<SimpleSlider />);
    expect(wrapper.find('.slick-next').length).toEqual(1);
  });

  it('should got to second slide when next button is clicked', function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-next').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('2');
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
    expect(wrapper.find('.slick-dots').childAt(1).hasClass('slick-active')).toEqual(true)
  });
  it('should goto last slide when prev button is clicked', function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-prev').simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('6');
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
    expect(wrapper.find('.slick-dots').childAt(5).hasClass('slick-active')).toEqual(true)
  })
  it('should goto 4th slide when 4th dot is clicked', function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-dots button').at(3).simulate('click')
    expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('4');
    expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
    expect(wrapper.find('.slick-dots').childAt(3).hasClass('slick-active')).toEqual(true)
  })
  // it('should come back to 1st slide after 6 clicks on next button', function () {
  //   // waitForAnimate option is causing problem for this test
  //   const wrapper = mount(<SimpleSlider />);
  //   wrapper.find('.slick-next').first().simulate('click').simulate('click')
  //   // wrapper.find('.slick-prev').first().simulate('click')
  //   // wrapper.find('.slick-next').first().simulate('click')
  //   // console.log(nextButton)
  //   // nextButton.simulate('click').simulate('click')
  //   // nextButton.simulate('click')
  //   // repeatClicks(wrapper.find('.slick-next'), 1)
  //   expect(wrapper.find('.slick-slide.slick-active').first().text()).toEqual('1');
  //   expect(wrapper.find('.slick-dots .slick-active').length).toEqual(1);
  //   expect(wrapper.find('.slick-dots').childAt(0).hasClass('slick-active')).toEqual(true)
  // })
});

describe("Simple Slider Snapshots", function () {
  it("slider initial state", function () {
    const wrapper = mount(<SimpleSlider />);
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it("click on next button", function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-next').simulate('click')
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it("click on prev button", function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-prev').simulate('click')
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  });
  it("click on 3rd dot", function () {
    const wrapper = mount(<SimpleSlider />);
    wrapper.find('.slick-dots button').at(2).simulate('click')
    expect(beautify_html(wrapper.html())).toMatchSnapshot()
  })
});

export function testWithParams(settings, actions, keys) {
  let reactDetails = getReactSlickDetails(settings, actions, keys)
  let jQueryDetails = getJQuerySlickDetails(settings, actions, keys)
  test('currentSlide', () => {
    expect(reactDetails.currentSlide).toEqual(jQueryDetails.currentSlide)
  })
  test('activeSlides', () => {
    expect(reactDetails.activeSlides).toEqual(jQueryDetails.activeSlides)
  })
  test('allSlides', () => {
    expect(reactDetails.allSlides).toEqual(jQueryDetails.allSlides)
  })
  test('activeSlides', () => {
    expect(reactDetails.clonedSlides).toEqual(jQueryDetails.clonedSlides)
  })
}

describe('Simple Slider React Vs jQuery', () => {
  
  let settings = {
    noOfSlides: 5,
    infinite: true,
    speed: 0,
    useCSS: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  let actions = {}
  let keys = {
    currentSlide: true,
    activeSlides: true,
    clonedSlides: true,
    allSlides: true,
    visibleSlides: true
  }

  // first section
  testWithParams(settings, actions, keys)

  // second section
  actions = {
    clickNext: 6
  }
  testWithParams(settings, actions, keys)

  // third section
  actions = {
    clickPrev: 6
  }
  testWithParams(settings, actions, keys)

  // fourth section
  actions = {
    clickSequence: 'nnpnnnnppnnnnnn'
  }
  testWithParams(settings, actions, keys)

})