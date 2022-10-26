import gulp from "gulp";
const { src, dest, watch, series, parallel } = gulp;
import autoprefixer from "autoprefixer";
import browsersync from "browser-sync";
import cssnano from "cssnano";
import imagemin from "gulp-imagemin"
import replace from "gulp-replace";
import postcss from "gulp-postcss";
import gulpSass from "gulp-sass";
import sassModule from "sass"
import terser from "gulp-terser";

const sass = gulpSass(sassModule);
browsersync.create();

// File paths
const files = {
  scssPath: "src/assets/sass/**/*.scss",
  jsPath: "src/js/**/*.js",
  imgPath: "src/assets/images/**/*.+(png|jpg|jpeg|svg)",
};

// Sass task: compiles the style.scss file into style.css
function scssTask() {
  const plugins = [autoprefixer(), cssnano()];

  return src(files.scssPath, { sourcemaps: true })
    .pipe(sass().on('error', sass.logError)) // compile SCSS to CSS
    .pipe(postcss(plugins))
    .pipe(dest("dist/assets/css", { sourcemaps: "." }));
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src(files.jsPath, { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist/js", { sourcemaps: "." }));
}

function imgTask() {
  return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest("dist/assets/images"));
}

// Cachebust
function cacheBustTask() {
  const cbString = new Date().getTime();

  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest('.'));
}

// Browser-sync to spin up a local server
function browserSyncServe(cb) {
  // initializes browser-sync server
  browsersync.init({
    server: {
      baseDir: "."
    }
  });
  cb();
}

function browserSyncReload(cb) {
  // reloads browser-sync server
  browsersync.reload();
  cb();
}

// Watch task: watch SCSS and JS files for changes
function watchTask() {
  watch(
    [files.scssPath, files.jsPath],
    { interval: 1000, usePolling: true },
    series(parallel(scssTask, jsTask), cacheBustTask)
  );
}

// Watch HTML file for change and reload browser-sync server
// watch SCSS and JS files for changes, run scss and js tasks simultaneously and update browser-sync
function bsWatchTask() {
  watch("index.html", browserSyncReload);
  watch(
    [files.scssPath, files.jsPath],
    { interval: 1000, usePolling: true },
    series(parallel(scssTask, jsTask), cacheBustTask, browserSyncReload)
  );
}

export const build = series(parallel(scssTask, jsTask, imgTask), cacheBustTask);
export const dev = series(parallel(scssTask, jsTask), cacheBustTask, browserSyncServe, bsWatchTask);