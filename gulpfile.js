const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')

gulp.task('css', function() {
  return gulp.src('src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
  return gulp.src('src/views/*.pug')
    .pipe(pug({
      pretty: true,
      basedir: './dist/'
    }))
    .pipe(gulp.dest('dist/views'));
});

gulp.task('watch', function() {
  gulp.watch('src/css/*.scss', gulp.series(['css', 'html']));
  gulp.watch('src/views/*.pug', gulp.series(['html']));
});

gulp.task('build', gulp.parallel('css', 'html', function(cb) {
  cb();
}))

gulp.task('default', gulp.series('build'));

// function html(cb) {
//   return src('src/views/*.pug')
//   .pipe(pug({
//     pretty: true,
//     basedir: './dist/'
//   }))
//   .pipe(dest('dist/views'));
//   cb();
// }

// function css(cb) {
//   return src('src/css/*.scss')
//   .pipe(sass().on('error', sass.logError))
//   .pipe(dest('dist/css'));
//   cb();
// }

// function watchFiles() {
//   gulp.watch('src/css/*.scss', css);
// }

// // function browserSync() {
// //   gulp.task('browser-sync', function() {
// //     bs.init({
// //       server: {
// //           baseDir: "./"
// //       }
// //     });
// //   });
// // }

// exports.html = html;
// exports.default = ;