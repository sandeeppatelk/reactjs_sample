"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // open url in web browser
var browserify = require('browserify'); // bundle JS
var reactify = require('reactify'); // Transform React JSX to JS
var source = require('vinyl-source-stream'); // Use conventional text stream with gulp
var concat = require('gulp-concat'); // concate files
var lint = require('gulp-eslint');

var config={
	port :3000,
	devBaseUrl: 'http:localhost',
	paths: {
		html: './src/*.html',
		js : './src/**/.js',
		dist: './dist',
		css : [
		      'node_modules/bootstrap/dist/css/bootstrap.min.css',
		      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
		images: './src/images/*',
		mainJs: './src/main.js'
	}

}

//start a local development server
gulp.task('connect',function(){
	connect.server({
		root: ['dist'],
		port : config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

gulp.task('open',['connect'],function(){
	gulp.src('dist/index.html')
	  .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/',
     app: 'chrome'
	}));
});

gulp.task('html',function(){
	gulp.src(config.paths.html)
	  .pipe(gulp.dest(config.paths.dist))
	  .pipe(connect.reload());
});

gulp.task('js',function(){
	browserify(config.paths.mainJs)
	        .transform(reactify)
	        .bundle()
	        .on('error',console.error.bind(console))
	        .pipe(source('bundle.js'))
	        .pipe(gulp.dest(config.paths.dist + '/script'))
	        .pipe(connect.reload());
});

gulp.task('css',function(){
	gulp.src(config.paths.css)
	    .pipe(concat('bundle.css'))
	    .pipe(gulp.dest(config.paths.dist +'/css'));
});

gulp.task('lint',function(){
	return gulp.src(config.paths.js)
	        .pipe(lint({config: 'eslint.config.json'}))
	        .pipe(lint.format());
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html,['html']);
	gulp.watch(config.paths.js,['js','lint']);
	
});

gulp.task('images',function(){
  gulp.src(config.paths.images)
      .pipe(gulp.dest(config.paths.dist + '/images'))
      .pipe(connect.reload());

  gulp.src('./src/favicon.ico')
      .pipe(gulp.dest(config.paths.dist));
});
gulp.task('default',['html','js','images','open','lint','css','watch']);
