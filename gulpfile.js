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
		})) // removes the asset query string from a properly closed tag i.e. <tag src="pathtosource?v=ghostquerystring"></tag>
		.pipe(replace(new RegExp('s.v=\\w+">','g'),function(match, p1, offset, string){
			return 's"/>';
		})) //removes the asset query string from an improperly shortcut closed tag i.e. <tag src="pathtosource?v=ghostquerystring"> note the missing back slash before the '>' 
		.pipe(replace('</html>2368/assets/js/main.min.js"></script></body>','')) // some random string that showed up in the root index.html
		.pipe(replace('/assets/mark%20townsend%20technical%20lead.pdf','../assets/mark%20townsend%20technical%20lead.pdf')) // mangles the manual href for downloading a static doc
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
	gulp.src(['static/**/*.css', 
		'static/**/*.js',
		'../ghost-0.6.4/content/themes/slimpost-master/assets/**/*.css',
		'../ghost-0.6.4/content/themes/slimpost-master/assets/**/*.js',
		'../mark townsend technical lead.pdf'])
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