"use strict";
const gulp = require('gulp');
const postcss = require('gulp-postcss');


gulp.task('css:test', () => {
    gulp.src(['_sass/**/*.scss'])
        .pipe(
            postcss([
                require('stylelint')(),
                require('postcss-reporter')({ clearMessages: true })
            ])
        );
});


gulp.task('watch', () => {
    gulp.watch(['_sass/**/*.scss'], ['css:test']);
});

gulp.task('test', ['css:test']);
gulp.task('default', ['test']);
