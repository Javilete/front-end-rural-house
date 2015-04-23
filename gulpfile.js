// Grab our gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');


// Create a default task
gulp.task('default', ['watch']);

// Configure the jshint task
gulp.task('jshint', function(){
    return gulp.src('public/javascripts/application/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Configure the css build from sass
gulp.task('build-css', function() {
    return gulp.src('public/stylesheets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/stylesheets'));
});

// Configur uglify for js just in production
gulp.task('build-js', function() {
    return gulp.src('public/javascripts/**/*.js')
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(gulp.dest('app/assets/javascript'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('public/javascripts/application/**/*.js', ['jshint']);
    gulp.watch('public/stylesheets/scss/**/*.scss', ['build-css']);
});