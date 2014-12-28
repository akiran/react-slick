var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-ruby-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('clean', function () {
  gulp.src('./build/*')
      .pipe(rimraf());
});

gulp.task('copy', function () {
  gulp.src('./docs/index.html')
    .pipe(gulp.dest('./build'));
  gulp.src('./bower_components/slick-carousel/slick/fonts/*')
      .pipe(gulp.dest('./build/fonts'));
  return gulp.src('./bower_components/slick-carousel/slick/ajax-loader.gif')
      .pipe(gulp.dest('./build'));
});

gulp.task('sass', function () {
  return  gulp.src(['./docs/**/*.scss'])
              .pipe(sass({ loadPath : ['bower_components', 'node_modules'],}))
               .on('error', function (err) { console.log(err.message); })
              .pipe(gulp.dest('./build'));
});

// gulp.task('sass', function () {
//   return  gulp.src(['./docs/**/*.{scss,sass}'])
//               .pipe(sass({ includePaths : ['bower_components', 'node_modules'], errLogToConsole: true}))
//               .pipe(gulp.dest('./build'));
// });

gulp.task('watch', ['copy', 'sass'], function () {
  gulp.watch(['./docs/**/*.{scss,sass}'], ['sass']);
  gulp.watch(['./docs/index.html'], ['copy']);
}); 

gulp.task('server', ['copy', 'sass'], function (callback) {
  var myConfig = require('./webpack.config.js');
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, 'localhost', function (err, result) {
  });
});
