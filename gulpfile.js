var gulp = require('gulp');
var replace = require('gulp-replace-task');
var rename = require('gulp-rename');

gulp.task('default', function() {
	
});

gulp.task('replace', function(){
	gulp.src('./static/**/*.html')
		.pipe(replace({
			patterns: [
				{
					match:'?v=([0-9a-z])*',
					replacement:''
				},
				{
					match:'/public/jquery.js',
					replacement:'src="https://code.jquery.com/jquery-2.1.4.min.js"'
				},
				{
					match:'/content/images/2015/06/',
					replacement:'/assets/images/'
				}
			]
		}))
		.pipe(gulp.dest('./markstownsend.github.io'));
});

gulp.task('move-images', function(){
	gulp.src(['static/**/*.jpg', 'static/**/*.JPG','static/**/*.PNG','static/**/*.png'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('./markstownsend.github.io/assets/images'));
});