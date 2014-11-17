var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
  gulp.src('./demos/build/*')
      .pipe(rimraf());
});

gulp.task('copy', function () {
  gulp.src('./bower_components/slick-carousel/slick/fonts/*')
      .pipe(gulp.dest('./demos/build/fonts'));
  gulp.src('./bower_components/slick-carousel/slick/ajax-loader.gif')
      .pipe(gulp.dest('./demos/build'));
  gulp.src('./demos/assets/jquery.scripts.js')
      .pipe(gulp.dest('./demos/build'));
});

gulp.task('sass', function () {
  return  gulp.src(['./demos/assets/**/*.{scss,sass}'])
              .pipe(sass({ includePaths : ['bower_components', 'node_modules'], errLogToConsole: true}))
              // .pipe(argv.minify ? minifyCSS(): gutil.noop()) 
              // .pipe(argv.gzip ? gzip({ append: false }): gutil.noop()) 
              .pipe(gulp.dest('./demos/build'));
});

 gulp.task('watch', ['sass'], function () {
  gulp.watch(['./demos/assets/**/*.{scss,sass}'], ['sass']);
}); 

gulp.task('server', ['copy'], function (callback) {
  var myConfig = require('./webpack.config.js');
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    publicPath: 'http://localhost:3000/',
    hot: true,
    debug: true
  }).listen(3000, 'localhost', function (err, result) {
    
  });
});