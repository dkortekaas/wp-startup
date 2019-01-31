module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('svg',
            function () {
                gulp.src('./Assets/svg/*.svg')
                    .pipe(gulp.dest('../' + outputProject + '/svg/'));
            });

        tasks.push("svg");
        watchFolders.push("./Assets/svg/*.svg");
    }
};