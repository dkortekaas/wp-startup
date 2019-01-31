
module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('fonts',
            function () {
                gulp.src('./Assets/fonts/**/*.*')
                    .pipe(gulp.dest('../' + outputProject + '/assets/fonts/'));
            });
        //tasks.push("fonts");
        //watchFolders.push("./Assets/fonts/**/*.ttf");
    }
};