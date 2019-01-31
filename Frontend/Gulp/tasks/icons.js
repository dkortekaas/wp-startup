module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('icons',
            function () {
                gulp.src('./Assets/icons/*.svg')
                    .pipe(plugins.svgmin({
                        plugins: [{
                            removeDoctype: false
                        }, {
                            removeComments: false
                        }, {
                            cleanupNumericValues: {
                                floatPrecision: 2
                            }
                        }, {
                            convertColors: {
                                names2hex: false,
                                rgb2hex: false
                            }
                        }]
                    }))
                    .pipe(gulp.dest('../' + outputProject + '/assets/icons/'));
            });

        tasks.push("icons");
        watchFolders.push("./Assets/icons/*.svg");

        gulp.task('app-icons',
            function () {
                gulp.src('./assets/app-icons/*.*')
                    .pipe(gulp.dest('../' + outputProject + '/assets/app-icons/'));
            });
    }
};