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

gulp.task("resources", () => {
    return gulp.src(["src/**/*", 
                     // "!**/*.html", 
                     "!**/*.md", 
                     "!**/*.ts", 
                     '!src/sass/**/*'])
        .pipe(gulp.dest("build"))
});