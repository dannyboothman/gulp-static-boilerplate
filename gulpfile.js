// List Dependencies
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const fileinclude = require("gulp-file-include");
var replace = require("gulp-replace");

// Create Functions
// - SCSS
function compileCss() {
  return src("./build/styles/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("./dist/styles"));
}

const paths = {
  scripts: {
    src: "./build/**/*",
    dest: "./dist/",
  },
};

function timestamp() {
  return "?v=" + Date.now();
}

function includeFilesTask() {
  return src([paths.scripts.src])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(replace("{{TIMESTAMP}}", timestamp()))
    .pipe(dest(paths.scripts.dest));
}

const watchHtmlPaths = ["build/*.html", "build/**/*.html"];
const watchScssPaths = ["build/styles/*.scss"];
const watchJsPaths = ["build/script/*.js", "build/script/*.json"];

// Create Watch Tasks
function watchTask() {
  watch(watchScssPaths, compileCss);
  watch(watchHtmlPaths, includeFilesTask);
  watch(watchJsPaths, includeFilesTask);
}

// default gulp
exports.default = series(includeFilesTask, compileCss, watchTask);
