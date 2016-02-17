var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    copy = require('gulp-copy2'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();

// create a default task and just log a message
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});
// build js files uglifying and concating then
gulp.task('build-js', function() {
    return gulp.src(['res/js/**/*.js',
                    'bower_components/angular/angular.js',
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery-mousewheel/jquery.mousewheel.min.js',
                    'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
                    'bower_components/PACE/pace.min.js',
                    'bower_components/ResponsiveSlides/responsiveslides',
                    'bower_components/velocity/velocity.min.js'])
        .pipe(concat('build.js'))
        .pipe(gulp.dest('dist/'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('build-css', function () {
    return gulp.src('res/css/*.css')
        .pipe(concatCss("build.css"))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function () {
    var paths = [
        {src: 'res/css/mCSB_buttons.png', dest: 'dist/'},
    ];
    return copy(paths);
});

gulp.task('build', function(callback) {
    runSequence('build-js', 'build-css', 'copy', callback);
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    gulp.watch("./res/js/*.js").on('change', browserSync.reload);
    gulp.watch("./res/css/*.css").on('change', browserSync.reload);
});


