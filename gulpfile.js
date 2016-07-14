const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify')
const annotate = require('gulp-ng-annotate')
const watch = require('gulp-watch')
const sourcemaps = require('gulp-sourcemaps');


// here are the gulp file paths
const paths = {
  jsSource: ['./src/js/**/*.js'],
  sassSource: ['./src/styles/**/*.scss']
}

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(sourcemaps.init())
        .pipe(annotate())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('bundle.js'))
        // .pipe(uglify()) uncomment when rdy for production
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
})

gulp.task('sass', function() {
  return gulp.src(paths.sassSource)
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public'))
});


gulp.task('watch', function() {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});

gulp.task('default', ['watch', 'js', 'sass']);
