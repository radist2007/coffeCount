const gulp = require('gulp');
const less = require('gulp-less');

function style(){
	return gulp.src('./less/style.less')
				.pipe(less())
				.pipe(gulp.dest('./Public/css'))
}

function watch(){
	return gulp.watch('./less/**/*.less', style);
}

gulp.task('css', style);
gulp.task('watch', watch);
