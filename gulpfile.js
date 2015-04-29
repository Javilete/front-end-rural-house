// Grab our gulp packages
var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
var annotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var rename = require('gulp-rename');


// Create a default task
gulp.task('default', ['watch']);

// Configure the jshint task
gulp.task('jshint', function(){
    return gulp.src('public/javascripts/application/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// Configure the css build from sass
//gulp.task('build-css', function() {
//    return gulp.src('public/stylesheets/scss/**/*.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('./app/assets/stylesheets'));
//});

// Configur uglify for js just in production
gulp.task('build-js', function() {
    return gulp.src('public/javascripts/application/**/*.js')
        .pipe(gulpif(argv.production), uglify({magle: true}))
        .pipe(gulp.dest('./app/assets/javascript'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('public/javascripts/application/**/*.js', ['jshint']);
    gulp.watch('public/stylesheets/scss/**/*.scss', ['build-css']);
});


gulp.task('ngAnnotate', function() {
    return gulp.src('public/javascripts/application/**/*.js')
        .pipe(annotate({add:true, single_quotes: true}))
//        .pipe(rename(function(path){
//            path.extname = '.annotated.js';
//        }))
        .pipe(gulp.dest('./app/assets/javascript'));
});