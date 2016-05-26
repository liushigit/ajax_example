/// <reference path="./typings/index.d.ts" />

// import * as gulp from 'gulp';

let gulp = require('gulp')
const del = require("del");
const sourcemaps = require('gulp-sourcemaps');

const tsc = require("gulp-typescript");
const tsProject = tsc.createProject("tsconfig.json");

gulp.task("default", () => {
  
})

gulp.task('build', ['compile', 'resources'],() => {
  console.log("Building the project ...")
});

gulp.task('compile_client', () => {
    let tsResult = gulp.src('src/public/typescript/**/*.ts')
                    .pipe(sourcemaps.init())
                    .pipe(tsc());
    return tsResult.js.pipe(sourcemaps.write("."))
                .pipe(gulp.dest('build/public/javascripts'));
})


gulp.task("compile", ['compile_client'], () => {
    let tsResult = gulp.src(["src/**/*.ts",
     "!src/public/**/*.*"])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        // .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

gulp.task("resources", ['bootstrap'], () => {
    return gulp.src(["src/**/*", 
                     // "!**/*.html", 
                     "!**/*.md", 
                     "!**/*.ts", 
                     "!**/*.pug", 
                     '!src/sass/**/*'])
        .pipe(gulp.dest("build"))
});

gulp.task('bootstrap', () => {
    return gulp.src(["node_modules/bootstrap/dist/**/*.*", 
                     ])
        .pipe(gulp.dest("build/public"))
})

var pug = require('gulp-pug');
 
gulp.task('jade', function buildHTML() {
  return gulp.src('src/**/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest("build"))
});