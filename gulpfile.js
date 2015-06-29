var gulp = require('gulp');
var replace = require('gulp-replace-task');

gulp.task('default', function() {
	
});

gulp.task('replace', function(){
	gulp.src('**\*.html')
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
		.pipe(gulp.dest('build'));
});

gulp.task('move-images', function(){
	gulp.src(['**\*.jpg', '**\*.JPG','**\*.PNG','**\*.png'])
	.pipe
});