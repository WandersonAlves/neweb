var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    cleanCss = require('gulp-clean-css'),
    copy = require('gulp-copy2'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    htmlreplace = require('gulp-html-replace');

// create a default task and just log a message
gulp.task('default', function () {
    'use strict';
    return gutil.log('Gulp is running!');
});
// build js files uglifying and concating then
gulp.task('build-js', function () {
    'use strict';
    return gulp.src([
        'bower_components/PACE/pace.min.js',
        'bower_components/angular/angular.js',
        'res/js/directives.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js',
        'bower_components/velocity/velocity.min.js',
        'bower_components/ResponsiveSlides/responsiveslides.js',
        'res/js/control.js'
    ]).pipe(concat('build.js')).pipe(gulp.dest('public/'));
});

gulp.task('build-css', function () {
    'use strict';
    return gulp.src([
        'res/css/base.css',
        'res/css/fixed-navigation-bar.css',
        'res/css/load-screen.css',
        'res/css/pace-dataurl.css',
        'res/css/jquery.mCustomScrollbar.css'
    ]).pipe(concatCss("build.css")).pipe(cleanCss({
        compatibility: 'ie8'
    })).pipe(gulp.dest('public/'));
});

gulp.task('copy', function () {
    'use strict';
    var paths = [
        {
            src: 'res/css/mCSB_buttons.png',
            dest: 'public/'
        },
        {
            src: 'res/assets/**',
            dest: 'public/res/assets/'
        },
        {
            src: 'res/views/**',
            dest: 'public/res/views/'
        }
    ];
    return copy(paths);
});

gulp.task('html-replace', function () {
    'use strict';
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'build.css',
            'js': 'build.js'
        })).pipe(gulp.dest('public/'));
});

gulp.task('build', function () {
    'use strict';
    var callback = function () {
        gutil.log("Remember to run 'firebase deploy' on your terminal!");
    };
    runSequence('build-js', 'build-css', 'copy', 'html-replace', callback);

});


gulp.task('server', function () {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080
    });

    gulp.watch(["./res/js/*.js", "./res/css/*.css", "./res/views/*.html"]).on('change', browserSync.reload);
});