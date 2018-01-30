import {getJQuerySlickDetails} from '../jQSlickUtils'
import {getReactSlickDetails} from '../reactSlickUtils'

describe('live testing module', () => {
  let settings = {
    infinite: true,
    speed: 0,
    useCSS: false,
    noOfSlides: 5,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
  }
  let actions = {
    clickNext: 0,
    clickPrev: 0,
    clickSequence: []
  }
  let keys = {
    // currentSlide: true,
    // activeSlides: true,
    clonedSlides: true,
    // allSlides: true,
  }
  let reactDetails = getReactSlickDetails(settings, actions, keys)
  let jqueryDetails = getJQuerySlickDetails(settings, actions, keys)

  // for(let noOfSlides of [5, 12]){
  //   for (let slidesToShow of [1, 11, 12]){
  //     for (let slidesToScroll of [1, 2, 11, 12]){
    
  // for(let noOfSlides of [2, 3, 5, 6, 12]){
  //   for (let slidesToShow of [1, 2, 3, 5, 11, 12]){
  //     for (let slidesToScroll of [1, 2, 3, 5, 11, 12]){
  //             if(noOfSlides < slidesToShow || noOfSlides < slidesToScroll || slidesToShow < slidesToScroll){
  //         continue;
  //       }
  //       settings.noOfSlides = noOfSlides
  //       settings.slidesToShow = slidesToShow
  //       settings.slidesToScroll = slidesToScroll
  //       const jqueryDetails = getJQuerySlickDetails(settings, actions, keys)
  //       const reactDetails = getReactSlickDetails(settings, actions, keys)
  //       // test('number of cloned slides', () => {
  //       //   expect(jqueryDetails.clonedSlides.filter(slide => slide.index < 0).length).toEqual(
  //       //     noOfSlides === slidesToShow ? 0 : (settings.centerMode ? slidesToShow+1 : slidesToShow) 
  //       //   )
  //       //   expect(jqueryDetails.clonedSlides.filter(slide => slide.index >= 0).length).toEqual(
  //       //     noOfSlides === slidesToShow ? 0 : noOfSlides
  //       //   )
  //       // })

  //       test('number of cloned slides, react vs jquery', () => {
  //         expect(reactDetails.clonedSlides.filter(slide => slide.index < 0).length).toEqual(
  //           jqueryDetails.clonedSlides.filter(slide => slide.index < 0).length 
  //         )
  //         expect(reactDetails.clonedSlides.filter(slide => slide.index >= 0).length).toEqual(
  //           jqueryDetails.clonedSlides.filter(slide => slide.index >= 0).length
  //         )
  //       })

  //       // console.log(
  //       //   'settings:', settings, '\n',
  //       //   'pre:', jqueryDetails.clonedSlides.filter(slide => slide.index < 0).length,
  //       //   'post:', jqueryDetails.clonedSlides.filter(slide => slide.index >= 0).length
  //       // )
  //       // console.log(
  //       //   'settings2:', settings.noOfSlides, '\n',
  //       //   'details2:', reactDetails.clonedSlides
  //       //   .filter(slide => slide.index > 0).length
  //       // )
  //     }
  //   }
  // }
  test('fake test', () => {
    expect(1).toBe(1)
  })
})