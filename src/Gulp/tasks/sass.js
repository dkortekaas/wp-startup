﻿var cssNanoOptions = {
    discardUnused: false,
    zindex: false
}

module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('sass',
            function () {
                return gulp.src('./scss/*.scss')
                    .pipe(plugins.sass().on('error', plugins.sass.logError))
                    .pipe(gulp.dest('./css/'))
                    .pipe(plugins.cssnano(cssNanoOptions))
                    .pipe(gulp.dest('../' + outputProject + '/css/'));
            });
        tasks.push("sass");
        watchFolders.push("./scss/**/*.scss");
    }
};