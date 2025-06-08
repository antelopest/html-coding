import gulp from 'gulp';
const { src, dest, watch, series, parallel } = gulp;

import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
const compileSass = gulpSass(sass);

import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import sourcemaps from 'gulp-sourcemaps';
import browserSyncLib from 'browser-sync';
const browserSync = browserSyncLib.create();

// HTML
function copyHTML() {
    return src('src/index.html')
        .pipe(dest('dist'))
        .pipe(browserSync.stream());
}

// SCSS -> CSS
function compileSCSS() {
    return src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

// JS
function scripts() {
    return src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream());
}

// Images
function images() {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

// Watcher
function serve() {
    browserSync.init({ server: { baseDir: 'dist' } });

    watch('src/index.html', copyHTML);
    watch('src/scss/**/*.scss', compileSCSS);
    watch('src/js/**/*.js', scripts);
    watch('src/img/**/*', images);
}

export default series(
    parallel(copyHTML, compileSCSS, scripts, images),
    serve
);
