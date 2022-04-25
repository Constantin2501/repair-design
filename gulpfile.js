const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch('./*.html').on('change', browserSync.reload);
});



const cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('./*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});