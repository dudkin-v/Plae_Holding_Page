const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    gulp.src('./src/**/*.scss')
});

gulp.task('sass', function(){
    gulp.src('./src/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css'));
});


