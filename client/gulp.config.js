module.exports = function () {
    var root = '';
    var app = root + 'src/';
    var resources = root + 'resources/';
    var index = root + 'index.html';
    var webConfig = root + 'Web.config';
    var assetsPath = {
        images: resources + "images/"
    };
    var tsFiles = [
        app + '**/*.ts'
    ];
    var dist = 'dist/';
    var build = {
        path: dist,
        app: dist + 'src/'
    };
    var mainPath = build.path + app + 'main.js';

    var systemJs = {
        builder: {
            normalize: true,
            minify: false,
            mangle: false,
            globalDefs: { DEBUG: false }
        }
    };
    var bundleName = build.path + "bundle.js";
    var filesToCopy = [
        { src: 'systemjs.conf.js', base:"./" },
        { src: 'src/resources/**/*.*', base:"./"},
        { src: 'src/themes/**/*.*', base:"./"},
        { src: 'node_modules/@angular/**/*.*', base:"./" },
        { src: 'node_modules/ej-angular2/**/*.*', base:"./" },
        { src: 'node_modules/rxjs/**/*.*', base:"./" },
        { src: 'node_modules/syncfusion-ej-global/**/*.*', base:"./" },
        { src: 'node_modules/syncfusion-javascript/**/*.*', base:"./" },
        { src: 'api/reports/**/*.*', base:"./" },
    ];
    var zip = {
        path: "dist/**/*.*",
        archive: "deploy.zip",
        dest: "dist"
    };
    var config = {
        zip: zip,
        files: filesToCopy,
        bundleName: bundleName,
        mainPath: mainPath,
        root: root,
        assetsPath: assetsPath,
        app: app,
        index: index,
        build: build,
        webConfig: webConfig,
        tsFiles: tsFiles,
        systemJs: systemJs
    };

    return config;
};
