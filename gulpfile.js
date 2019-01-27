"use strict";

let gulp = require("gulp");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let sourcemaps = require("gulp-sourcemaps");
let server = require("browser-sync");

gulp.task("sass", function() {
    gulp.src("scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest("."))
    .pipe(server.stream());
});

gulp.task("serve", ["sass"], function(){
    server.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    gulp.watch("scss/**/*.scss", ["sass"]);
    gulp.watch(["index.html", "main.css", "main.js"], server.reload);
});