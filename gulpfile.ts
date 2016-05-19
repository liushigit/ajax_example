/// <reference path="./typings/index.d.ts" />

// import * as gulp from 'gulp';

let gulp = require('gulp')
const del = require("del");
const sourcemaps = require('gulp-sourcemaps');

const tsc = require("gulp-typescript");
const tsProject = tsc.createProject("tsconfig.json");

gulp.task("default", function() {
  
})

gulp.task('build', ['compile', 'resources'],function() {
  console.log("Building the project ...")
});

gulp.task("compile", () => {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        // .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"));
});

gulp.task("resources", () => {
    return gulp.src(["src/**/*", 
                     // "!**/*.html", 
                     "!**/*.md", 
                     "!**/*.ts", 
                     '!src/sass/**/*'])
        .pipe(gulp.dest("build"))
});