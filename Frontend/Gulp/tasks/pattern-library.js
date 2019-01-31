
module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('pattern-library',
            function () {
                return gulp.src('pattern-library/**/*.*')
                    .pipe(gulp.dest('../' + outputProject + '/styleguide/'));
            });
        tasks.push("pattern-library");
        watchFolders.push("./pattern-library/**/*.*");
    }
};