var gulp = require('gulp');
var webpack = require('gulp-webpack');
var concat = require('gulp-concat');
var less = require('gulp-less');
var webpackConf = require('./webpack.config.js');
var gutil = require('gulp-util');
var notifier = require('node-notifier');
var argv = require('yargs').argv;
var connect = require('gulp-connect');

var plumber = require('gulp-plumber');

var gulpNotifier = {
    error: function(errorMessage){
        if(showToasts()){
            notifier.notify({
              title: 'GULP - ERROR',
              message: errorMessage,
              sound: true
            });
        }
    },

    success: function(message){
        if(showToasts()){
            notifier.notify({
              title: 'GULP - SUCCESS',
              message: message,
              sound: true
            });
        }
    }
};

var defaultStatsOptions = {
    colors: gutil.colors.supportsColor,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
};

gulp.task("connect", function(){
    connect.server({
        root: 'dist',
        livereload: true,
        port: 8004
      });
});

gulp.task("webpack", function() {
    var errorMessage;

    return gulp.src('src/js/main.js')
        .pipe(webpack( webpackConf, null, function(error, stats) {
            if(stats.hasErrors()){
                errorMessage = "Some error";
            }
            gutil.log(stats.toString(defaultStatsOptions));
        }))
        // .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
        .on('end', function() {
            if(errorMessage){
                gulpNotifier.error(errorMessage);
            } else{
                gulpNotifier.success("Webpack - builded!");
            }
            errorOccured = false;
        });
});

gulp.task('build-less', function(){
    var errorMessage;

    return gulp.src('./src/less/**/*.less')
        .pipe(plumber(function(error) {
            gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
            errorMessage = error.message;
            this.emit('end');
        }))
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload())
        .on('end', function() {
            if(errorMessage){
                gulpNotifier.error(errorMessage);
            } else{
                gulpNotifier.success("Less - builded!");
            }
            errorOccured = false;
        });
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
    // gulp.src('node_modules/materialize-css/bin/materialize.css')
    //   .pipe(gulp.dest('dist/css'));
    gulp.src('src/less/foundation.min.css')
      .pipe(gulp.dest('dist/css'));
      gulp.src('src/less/font-awesome.min.css')
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/data/**/*.json')
      .pipe(gulp.dest('dist/data'));
    gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['build-less', 'webpack', 'copy']);

gulp.task('watch', function() {
    connect.server({
       root: 'dist',
       livereload: true,
       port: 8004
    });

    gulp.watch(['src/index.html', 'src/data/**/*.json'], ['copy']);
    gulp.watch('src/less/**/*.less', ['build-less']);
    gulp.watch(['src/**/*.js', 'src/**/*.jsx', 'src/**/*.less'], ['webpack']);
});

function showToasts(){
    return !argv.noToasts;
}
