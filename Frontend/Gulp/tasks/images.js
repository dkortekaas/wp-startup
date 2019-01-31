module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('images',
            function () {
                return gulp.src('./Assets/images/**/*.*')
                    .pipe(plugins.imagemin())
                    .pipe(gulp.dest('../' + outputProject + '/assets/images/'));
            });

        tasks.push("images");
        watchFolders.push("./Assets/images/**/*.*");
    }
};