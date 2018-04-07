// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');

gulp.task('task simple', function () {
    console.log('hello');
});

var sass = require('gulp-sass');

gulp.task('sass_sin_globbing', function () {
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('app/css'))
});

gulp.task('sass_con_globbing', function () {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

// browserSync tiene que acabar antes de lanzar el watch
gulp.task('watch', ['browserSync', 'sass_con_globbing'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass_con_globbing']);
    // Other watchers
})

var browserSync = require('browser-sync').create();

//Esta tarea lanza browser sync
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})