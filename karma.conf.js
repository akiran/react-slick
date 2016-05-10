// Karma configuration
'use strict';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/es5-shim/es5-shim.js',
      'testlib/sinon.js',
      'node_modules/react/dist/react-with-addons.js',
      //'bower_components/jquery/dist/jquery.js',
      'node_modules/should/should.js',
      'test/**/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './test/**/*.js': ['webpack'],
    },

    webpack: {
      module: {
        loaders: [
            { loader: 'babel' },
        ]
      },
      resolve : {
          extensions: ['', '.js', '.jsx']
      },
      externals: {
        react: 'React',
        'react/addons': 'React',
        'sinon': 'sinon',
        jquery: '$',
        should: 'should'
      },
      // postLoaders: [{
      //   test: ', // every file
      //   loader: 'coverjs-loader'
      // }]
    },
    webpackServer: {
      // hot: true,
      quiet: true,
      noInfo: true,
    },
    // webpackPort: 8080, // Defaults to config.port + 1

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/'
    // },
    reportSlowerThan: 20,

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // plugins: [
    //   require('karma-webpack')
    // ]
  });
};
