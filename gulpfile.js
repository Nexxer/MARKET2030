// не установлен Babel https://www.npmjs.com/package/gulp-babel
// не установлен Fonter - https://www.npmjs.com/package/gulp-fonter
// не установлен ttf2woff - https://www.npmjs.com/package/gulp-ttf2woff
// не установлен ttf2woff2 - https://www.npmjs.com/package/gulp-ttf2woff2
// настройки по https://www.youtube.com/watch?v=stFOy0Noahg&t=3160s

// BrowserSync - https://www.browsersync.io/docs/gulp
// File Include - https://www.npmjs.com/package/gulp-file-include
// Del - https://www.npmjs.com/package/del
// Sass - https://www.npmjs.com/package/gulp-sass
// Autoprefixer - https://www.npmjs.com/package/gulp-autoprefixer
// Group CSS media - https://www.npmjs.com/package/gulp-group-css-media-queries
// Rename - https://www.npmjs.com/package/gulp-rename
// Clean CSS -https://www.npmjs.com/package/gulp-clean-css
// Uglify ES - https://www.npmjs.com/package/gulp-uglify-es
// Imagemin - https://www.npmjs.com/package/gulp-imagemin
// WEBP - https://www.npmjs.com/package/gulp-webp
// WEBP HTML - https://www.npmjs.com/package/gulp-webp-html
// WEBP CSS - https://www.npmjs.com/package/gulp-webp-css отличный от видео
// SVG Sprite - https://www.npmjs.com/package/gulp-svg-sprite

let pf = "dist";
let sf = "src";
let fs = require('fs');

let path = {
    build: {
        html: pf + "/",
        css: pf + "/css/",
        js: pf + "/js/",
        img: pf + "/img/",
        fonts: pf + "/fonts/",
        vendor: pf + "/vendor/"
    },
    src: {
        html: [sf + "/*.html", "!" + sf + "/_*.html"],
        css: sf + "/scss/style.scss",
        js: sf + "/js/script.js",
        img: sf + "/img/**/*.*",
        fonts: sf + "/fonts/*.*",
        vendor: sf + "/vendor/**"
    },
    watch: {
        html: sf + "/**/*.html",
        css: sf + "/scss/**/*.scss",
        js: sf + "/js/**/*.js",
        img: sf + "/img/**/*.*",
        vendor: sf + "/vendor/**"
    },
    clean: "./" + pf + "/"
}

let { src, dest } = require('gulp');
let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let fileinclude = require('gulp-file-include');
let del = require('del');
let scss = require('gulp-sass')(require('sass'));
let autoprefixer = require('gulp-autoprefixer');
let group_media = require('gulp-group-css-media-queries');
let clean_css = require('gulp-clean-css');
let rename = require("gulp-rename");
let uglify = require('gulp-uglify-es').default;
let imagemin = require('gulp-imagemin');
// let webp = require('gulp-webp');
// let webpHTML = require('gulp-webp-html');
// let webpCss = require("gulp-webp-css");
let svgSprite = require('gulp-svg-sprite');
let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');
let fonter = require('gulp-fonter');


function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./" + pf + "/",
            tunnel: true
        },
        port: 3000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        // .pipe(webpHTML())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'expanded'
            })
                .on('error', scss.logError)
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        // .pipe(webpCss())
        .pipe(dest(path.build.css))
        // .pipe(clean_css())
        // .pipe(
        //     rename({
        //         extname: ".min.css"
        //     })
        // )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}


function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        // .pipe(
        //     rename({
        //         extname: ".min.js"
        //     })
        // )
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        // .pipe(
        //     webp({
        //         quality: 70
        //     })
        // )
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 // 0-7
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

gulp.task('svgSprite', function () {
    return gulp.src([sf + '/iconsprite/*.svg'])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../icons/icons.svg",
                    example: true
                }
            },
        }))
        .pipe(dest(path.build.img))
})

gulp.task('otf2ttf', function () {
    return src([sf + '/fonts/*.otf'])
        .pipe(fonter({
            formats: ['ttf']
        }))
        .pipe(dest(sf + '/fonts/'));
})

function fonts() {
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts));
}

function fontsStyle(params) {
    let file_content = fs.readFileSync(sf + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(sf + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(sf + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}

function cb() { }

function vendor() {
    return src(path.src.vendor)
        .pipe(dest(path.build.vendor))
}
function watchFile() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}
function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, vendor), fontsStyle);
let watch = gulp.parallel(build, watchFile, browserSync);

exports.vendor = vendor;
exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;