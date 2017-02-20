const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('js', function() {
  gulp.src(['app/app.js', 'app/firebaseConfig.js', 'app/**/*.js'])
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  gulp.src([
    'style/fonts/*.css', 
    'style/**/*.css',
    ])
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js', 'css']);

gulp.watch('app/**/*.js', ['js']);
gulp.watch('style/**/*.css', ['css']);