var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-ruby-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var runSequence = require('run-sequence');
var assign = require('object-assign');

gulp.task('clean', function () {
  return del(['./build/*']);
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
  myConfig.plugins = myConfig.plugins.concat(
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("dev_docs")
      }
    })
  );
  
  var webpackCompiler = webpack(myConfig, function(err, stats) {
  });

  new WebpackDevServer(webpackCompiler, {
    contentBase: './build',
    hot: true,
    debug: true
  }).listen(8000, process.env.HOST_IP || 'localhost', function (err, result) {
  });
});


// gulp tasks for building dist files
gulp.task('dist-clean', function () {
  return del(['./dist/*']);
});

var distConfig = require('./webpack.config.dist.js');
gulp.task('dist-unmin', function (cb) {
  var unminConfig = assign({}, distConfig);
  unminConfig.output.filename = 'react-slick.js';
  return webpack(unminConfig, function (err, stat) {
    console.log(err);
    cb();
  });
});


gulp.task('dist-min', function (cb) {
  var minConfig = assign({}, distConfig);
  minConfig.output.filename = 'react-slick.min.js';
  minConfig.plugins = minConfig.plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
  return webpack(minConfig, function (err, stat) {
    console.log(err);
    cb();
  });
});

gulp.task('dist', runSequence('dist-clean', 'dist-unmin', 'dist-min'));