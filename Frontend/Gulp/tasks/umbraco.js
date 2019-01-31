var GridStylesCssNanoOptions = {
    discardUnused: false,
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari >= 8',
            'ie >= 10',
            'ff >= 30',
            'ios 8',
            'android 4'
        ], add: true }
}

module.exports = function (gulp, plugins, outputProject, tasks, watchFolders) {
    if (outputProject) {

        gulp.task('umbraco-rte',
            function() {
                return gulp.src('./Assets/umbraco/styles/rte/*.scss')
                    .pipe(plugins.sass().on('error', plugins.sass.logError))
                    .pipe(gulp.dest('../' + outputProject + '/css/'));
            });
        tasks.push("umbraco-rte");
        watchFolders.push("./Assets/umbraco/styles/rte/*.scss");

        gulp.task('umbraco-grid-styles', 
            function () {
                return gulp.src('./Assets/umbraco/styles/grid/*.scss')
                    .pipe(plugins.sass().on('error', plugins.sass.logError))
                    .pipe(plugins.rename('axendo.gridstyles.min.css'))
                    .pipe(plugins.cssnano(GridStylesCssNanoOptions))
                    .pipe(gulp.dest('../' + outputProject + '/App_Plugins/Axendo.Gridstyles/css/'));
            });
        tasks.push("umbraco-grid-styles");
        watchFolders.push("./Assets/umbraco/styles/grid/*.scss");

        //gulp.task('umbraco-icons',
        //    function() {
        //        gulp.src('./assets/icons/svg/*.svg')
        //            .pipe(plugins.svgSprite({
        //                "mode": {
        //                    // umbraco only uses the symbol sprite. scss and view commented out, since we handle that differently, but can be enabled if needed
        //                    //"css": {
        //                    //    "dest": "assets",
        //                    //    "prefix": ".%s",
        //                    //    "sprite": '../../' + outputProject + '/assets/icons/icon.css.svg',
        //                    //    "bust": false,
        //                    //    "render": {
        //                    //        "scss": {
        //                    //            "template": "./assets/umbraco/icon-sprite-template.scss",
        //                    //            "dest": "./umbraco/styles/icons/_icons.scss"
        //                    //        }
        //                    //    }
        //                    //},
        //                    //"view": {
        //                    //    "bust": false,
        //                    //    "sprite": '../../' + outputProject + '/assets/icons/icon.sprite.svg'
        //                    //},
        //                    "symbol": {
        //                        "bust": false,
        //                        "sprite": '../../' + outputProject + '/assets/icons/icon.symbol.svg'
        //                    }
        //                }
        //            }))
        //            // replace the location of the svg  in the scss file with the real location it will have on the website.
        //            //.pipe(plugins.replace('../../Axendo.Umb.Customer.Startup.Web/assets/icons/icon.css.svg',
        //            //    '/assets/icons/icon.css.svg'))
        //            .pipe(gulp.dest('.'));
        //    });
        //tasks.push("umbraco-icons");
        //watchFolders.push("./assets/icons/svg/*.svg");
    }
};