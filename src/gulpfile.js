/// <binding ProjectOpened='watch' />

'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*', 'streamqueue']
    }),
    taskPath = './Gulp/tasks/',
    fontmin = require('gulp-fontmin'),
    taskList = require('fs').readdirSync(taskPath),
    fs = require('fs'),
    path = require('path'),
    endsWith = require('path-ends-with'),
    chalk = require('chalk'),
    log = require('fancy-log'),
    minimist = require('minimist'),
    svgSprite = require('gulp-svg-sprite'),
    replace = require('gulp-replace');

var outputProject = 'assets';    // The folder with the theme files
var tasks = [];                 // Will be set from the Gulp task files
var watchFolders = [];          // Will be set from the Gulp task files

if (outputProject) {
    taskList.forEach(function (taskFile) {
        require(taskPath + taskFile)(gulp, plugins, outputProject, tasks, watchFolders);
    });
} else {
    log(chalk.red("!!! THEME FOLDER NOT AVAILABLE !!!"));
}


gulp.task('watch', tasks, function () {
    gulp.watch(watchFolders, tasks);
});

gulp.task('default', ['watch']);

///// Used by BAMBOO
// gulp.task('releaseBuild', function () {
//     var knownOptions = {
//         string: 'env',
//         default: { env: process.env.NODE_ENV || 'local' }
//     };

//     var options = minimist(process.argv.slice(2), knownOptions);
//     if (options.env === 'Bamboo') {
//         log("Bamboo release build'");
//         process.env.NODE_ENV = 'production';
//     } else {
//         log(chalk.red("Local release build"));
//         process.env.NODE_ENV = 'development';
//     }

//     tasks.forEach(function (task) {
//         gulp.start(task);
//     });
// });