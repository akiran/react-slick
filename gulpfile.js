"use strict";

var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var assign = require("object-assign");
var opn = require("opn");

var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const DEV_PORT = 8080;

gulp.task("clean", function() {
  return del(["./build/*"]);
});

gulp.task("copy", function() {
  gulp.src("./docs/index.html").pipe(gulp.dest("./build"));
  gulp.src("./docs/docs.css").pipe(gulp.dest("./build"));
  gulp.src("./docs/slick.css").pipe(gulp.dest("./build"));
  gulp.src("./docs/slick-theme.css").pipe(gulp.dest("./build"));
  gulp.src("./docs/img/**/*").pipe(gulp.dest("./build/img"));
  gulp
    .src("./node_modules/slick-carousel/slick/fonts/*")
    .pipe(gulp.dest("./build/fonts"));
  return gulp
    .src("./node_modules/slick-carousel/slick/ajax-loader.gif")
    .pipe(gulp.dest("./build"));
});

gulp.task("sass", function() {
  return gulp
    .src(["./docs/**/*.{scss,sass}"])
    .pipe(
      sass({
        includePaths: ["bower_components", "node_modules"],
        errLogToConsole: true
      })
    )
    .pipe(gulp.dest("./build"));
});

gulp.task(
  "watch",
  gulp.series(["copy", "sass"], function(done) {
    gulp.watch(["./docs/**/*.{scss,sass}"], gulp.parallel(["sass"]));
    gulp.watch(["./docs/index.html"], gulp.parallel(["copy"]));
    gulp.watch(["./docs/docs.css"], gulp.parallel(["copy"]));
    gulp.watch(["./docs/slick.css"], gulp.parallel(["copy"]));
    gulp.watch(["./docs/slick-theme.css"], gulp.parallel(["copy"]));
    done();
  })
);

gulp.task(
  "server",
  gulp.series(["watch", "copy", "sass"], function() {
    console.log("Start");
    var myConfig = require("./webpack.config");
    if (process.env.SINGLE_DEMO) {
      myConfig.entry = {
        "docs.js": "./docs/single-demo.js"
      };
    }
    myConfig.plugins = myConfig.plugins.concat(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("dev_docs")
        }
      })
    );

    new WebpackDevServer(webpack(myConfig), {
      contentBase: "./build",
      hot: true,
      stats: {
        colors: true
      }
    }).listen(DEV_PORT, "0.0.0.0", function(err, result) {
      if (err) {
        console.log(err);
      } else {
        const server_url = `http://0.0.0.0:${DEV_PORT}`;
        console.log(`> Dev Server started at ${server_url}`);
        opn(server_url);
      }
    });
  })
);

// gulp tasks for building dist files
gulp.task("dist-clean", function() {
  return del(["./dist/*"]);
});

var distConfig = require("./webpack.config.dist.js");
gulp.task("dist-unmin", function(cb) {
  var unminConfig = assign({}, distConfig);
  unminConfig.output.filename = "react-slick.js";
  unminConfig.mode = "none";
  return webpack(unminConfig, function(err, stat) {
    console.error(err);
    cb();
  });
});

gulp.task("dist-min", function(cb) {
  var minConfig = assign({}, distConfig);
  minConfig.output.filename = "react-slick.min.js";
  minConfig.plugins = minConfig.plugins.concat(
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        warnings: false
      }
    })
  );
  return webpack(minConfig, function(err, stat) {
    console.error(err);
    cb();
  });
});

gulp.task(
  "dist",
  gulp.series(["dist-clean", "dist-unmin", "dist-min"], function(done) {
    done();
  })
);

gulp.task("default", gulp.series(["watch", "server"]));
