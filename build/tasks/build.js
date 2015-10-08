var gulp = require('gulp');
var paths = require('../paths');
var packagejson = require('../../package.json');
var sass = require("gulp-sass");


/**
 * Transpiles all .ts files from source directory to output directory
 */
gulp.task('build', ['clean'], function() {
  gulp.src(paths.source + '/' + packagejson.name + '.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest(paths.output));
});
