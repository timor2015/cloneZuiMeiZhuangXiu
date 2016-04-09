// 引入插件

var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

// gulp 默认任务
gulp.task('default', ['browserSync'], function(){
	gulp.watch('./src/css/**/*.css', ['sass']);
	gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
});


// gulp sass解析任务
gulp.task('sass', function(){
	gulp.sass('./src/scss/**/*scss')
		.on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe('./src/css')
        .pipe(reload({stream: true}));
})

// 浏览器刷新任务
gulp.task('browserSync', function(){
	browserSync({
	    server: {
	      baseDir: './'
	    },

	    // 在Chrome浏览器中打开网站 
		browser: ["chrome"],

		// 监听的文件列表
		files : [
			'./src/css/**/*.css',
			'./src/js/**/*.js',
			'./src/boot.js',
			'./index.html'
		],
	})
})