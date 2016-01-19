var should = require('should');
var sinon = require('sinon');
var assign = require('object-assign');
var deepMerge = require('deepmerge');
var helpers = require('../src/mixins/helpers');
var initialState = require('../src/initial-state');
var defaultProps = require('../src/default-props');

// describe('helpers.getDotCount', function () {
//   it('dot count with slidesToShow = 1', function () {
//     var hlepers = require('../src/mixins/helpers');
//     helpers.state = assign(initialState, { slideCount: 6 });
//     helpers.props = assign(defaultProps, {slidesToScroll: 1});
//     helpers.getDotCount().should.equal(5);
//   });
  
//   it('dot count with slidesToShow = 4', function () {
//     var hlepers = require('../src/mixins/helpers');
//     helpers.state = assign(initialState, { slideCount: 16 });
//     helpers.props = assign(defaultProps, {slidesToScroll: 4});
//     helpers.getDotCount().should.equal(3);
//   });
// });

// describe('helpers.getLeft', function () {
//   it('return left with slidesToShow = 1 ', function () {
//     var hlepers = require('../src/mixins/helpers');
//     helpers.state = assign(initialState, { slideCount: 6, slideWidth: 100 });
//     helpers.props = assign(defaultProps);
//     helpers.getLeft(0).should.equal(-100);
//     helpers.getLeft(3).should.equal(-400);
//   });

//   it('return left for slidesToShow = 4', function () {
//     var hlepers = require('../src/mixins/helpers');
//     helpers.state = assign(initialState, { slideCount: 6, slideWidth: 100 });
//     helpers.props = assign(defaultProps, {slidesToShow: 4});
//     helpers.getLeft(0).should.equal(-400);
//     helpers.getLeft(1).should.equal(-500);
//   });
// });



