module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {
        gulp.task('scripts',
            function () {
                var shouldMinify = process.env.NODE_ENV === "production";
                
                return plugins.streamqueue({ objectMode: true },
                          gulp.src(['./scripts/**/*.js'])
                      )
                    .pipe(plugins.concat('scripts.js'))
                    .pipe(gulp.dest('../' + outputProject + '/scripts/'))
                    .pipe(plugins.rename('scripts.min.js'))
                    .pipe(plugins.if(shouldMinify, plugins.uglify()))
                    .pipe(gulp.dest('../' + outputProject + '/scripts/'));
            });
        tasks.push("scripts");
        watchFolders.push("./scripts/**/*.js");
    }
};