var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
var del = require('del');

gulp.task('resize', function () {
    return gulp.src('assets/images/original/*/*.*')
        .pipe(imageResize({
            width: 1200,
            imageMagick: true
        }))
        .pipe(gulp.dest('assets/images/fulls'))
        .pipe(imageResize({
            width: 500,
            imageMagick: true
        }))
        .pipe(gulp.dest('assets/images/thumbs'));
});


// gulp.task('del', ['resize'], function () {
//     return del(['images/*.*']);
// });

// gulp.task('default', ['del']);

gulp.task('default', ['resize']);

