var gulp = require('gulp');
var print = require('gulp-print');

require('../../install');

gulp.task('test', function() {
  return gulp.src('./**/*.*') |
  print(p => 'file:' + p) |
  gulp.dest('.');
});
