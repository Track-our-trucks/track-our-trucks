const gulp = require('gulp'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    annotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

// here are the gulp file paths
const paths = {
    jsSource: ['src/js/**/*.js'],
    sassSource: ['src/styles/**/*.scss'],
    HTMLSource: ['src/**/*.html'],
    ImageSource: ['src/img/*.*']
};

gulp.task('server', function() {
    browserSync.init({
        proxy: 'http://localhost:9000',
        port: 9001,
        ui: false
    });
});

gulp.task('js', function() {
    return gulp.src(paths.jsSource)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(annotate())
        .pipe(babel({
            presets: ['es2015'],
            ignore: ['**/ng-map.js']
        }))
        .pipe(concat('bundle.js'))
        // .pipe(uglify()) uncomment when rdy for production
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
        .on('end', reload);
});

gulp.task('sass', function() {
    return gulp.src(paths.sassSource)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream({
            match: '**/*.css'
        }));
});

gulp.task('HTML', function() {
    return gulp.src(paths.HTMLSource)
        .pipe(plumber())
        .pipe(gulp.dest('./public'))
        .on('end', reload);
});

gulp.task('Image', function() {
    return gulp.src(paths.ImageSource)
        .pipe(plumber())
        .pipe(gulp.dest('./public'))
        .on('end', reload);
});

gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.sassSource, ['sass']);
    gulp.watch(paths.HTMLSource, ['HTML']);
    gulp.watch(paths.ImageSource, ['Image']);

});

gulp.task('default', ['server', 'watch', 'js', 'sass', 'HTML', 'Image']);