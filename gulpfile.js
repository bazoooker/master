const { src, dest, series, watch }	= require('gulp');
const sass 							= require('gulp-sass');
sass.compiler 						= require('node-sass');
const rename 						= require("gulp-rename");
const browserSync 					= require('browser-sync').create();
const concat 						= require('gulp-concat');
const uglify 						= require('gulp-uglify');
const pipeline 						= require('readable-stream').pipeline;
const plumber                       = require('gulp-plumber');


function cssIntoSass() {
	return src('app/scss/**/*.scss')
        .pipe(plumber())
    	.pipe(sass({outputStyle: 'compressed'}))
    	.pipe(rename("main.min.css"))
    	.pipe(dest('dist/css'))
    	.pipe(browserSync.stream());
};


function scripts() {
	return src('app/js/**/*.js')
        .pipe(plumber())
    	.pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
    	.pipe(dest('dist/js'))
    	.pipe(browserSync.stream());
}


function serve() {
	browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
	watch( './app/js/*.js').on('change', series(scripts));
	watch( './app/scss/**/*.scss').on('change', series(cssIntoSass));
	watch( 'dist/*.html').on('change', browserSync.reload );
};


exports.scripts = scripts;
exports.cssIntoSass = cssIntoSass;
exports.default = series(scripts, cssIntoSass, serve);