var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('default', function() {
	
});

gulp.task('replace', function(){
	gulp.src('./static/**/*.html')
		.pipe(replace(new RegExp('s.v=\\w+"><','g'),function(match, p1, offset, string){
			return 's"><';
		}))
		.pipe(replace(new RegExp('s.v=\\w+">','g'),function(match, p1, offset, string){
			return 's"/>';
		}))
		.pipe(replace('</html>t:2368/assets/js/main.min.js"></script></body>',''))
		.pipe(replace('src="/public/jquery.js"','src="https://code.jquery.com/jquery-2.1.4.min.js"'))
		.pipe(replace('/content/images/2015/06/','/assets/images/'))
		.pipe(gulp.dest('./markstownsend.github.io'));
});

gulp.task('move-images', function(){
	gulp.src(['static/**/*.jpg', 'static/**/*.png','../ghost-0.6.4/content/images/**/*.jpg','../ghost-0.6.4/content/images/**/*.png'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('./markstownsend.github.io/assets/images'));
});

gulp.task('move-assets', function(){
	gulp.src(['static/**/*.css', 'static/**/*.js','../ghost-0.6.4/content/themes/slimpost-master/assets/**/*.css','../ghost-0.6.4/content/themes/slimpost-master/assets/**/*.js'])
		.pipe(gulp.dest('./markstownsend.github.io/assets/'));
});

gulp.task('shallow-clean', function(cb){
	del(['./markstownsend.github.io/**/*',
		'!./markstownsend.github.io/README.md',
		'!./markstownsend.github.io/CNAME',
		'!./markstownsend.github.io/.git',
		'!./markstownsend.github.io/.git/**',
		'!markstownsend.github.io/.gitignore'], cb);
});

gulp.task('deep-clean', ['shallow-clean'],function(cb){
	del(['./static/*'], cb);
});

gulp.task('build', ['move-images','move-assets','replace'],function(){
	
});