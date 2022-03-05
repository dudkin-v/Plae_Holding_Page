const { watch, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return src('./src/styles/scss/*.scss')
        .pipe(sass())
        .pipe(dest('./src/styles/css/'));
}

exports.dev = function () {
    watch('./src/styles/**/*.scss', scss)
};