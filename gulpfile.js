var gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    compass      = require('gulp-compass'),
    path         = require('path')


// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("src/scss/**/*.scss")
        .pipe(compass({
          config_file: './config.rb',
          project: path.join(__dirname, '.'),
          css: 'src/stylesheets',
          sass: 'src/scss',
          js: 'src/js',
          image: 'src/images',
        }))
        .pipe(sass({
            outputStyle : "compressed",
            outFile: 'static/css/main.css'
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/css"))
})

gulp.task("images", function () {
    gulp.src("src/images/**/*.{jpg,jpeg,png}")
        .pipe(gulp.dest('static/img'));
})

// Watch asset folder for changes
gulp.task("watch", ["scss", "images"], function () {
    gulp.watch("src/scss/**/*", ["scss"])
    gulp.watch("src/images/**/*", ["images"])
})

gulp.task("build", ["scss", "images"])

// Set watch as default task
gulp.task("default", ["watch"])