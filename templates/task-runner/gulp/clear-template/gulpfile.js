const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function compileSCSS() {
    return src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest('dist/styles'))
        .pipe(browserSync.stream());
}

function copyHTML() {
    return src('src/index.html')
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    watch('src/styles/**/*.scss', compileSCSS);
    watch('src/index.html', copyHTML);
}

exports.default = series(copyHTML, compileSCSS, serve);
