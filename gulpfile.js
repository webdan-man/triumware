var gulp       = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber      = require('gulp-plumber'),
    notify       = require("gulp-notify"),
    sourcemaps   = require("gulp-sourcemaps"),
    babel        = require('gulp-babel'),
    htmlmin      = require('gulp-htmlmin')

;

gulp.task('sass', function(){
    return gulp.src('app/sass/*.scss')
        .pipe(plumber({
            errHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/sass/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('css-min', ['sass'], function() {
    return gulp.src('app/css/main.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('page', function() {
    return gulp.src('app/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist/'));
});
// gulp.task('ajax', function() {
//     return gulp.src('app/ajax/**/*.php')
//         .pipe(gulp.dest('./dist/ajax/'));
// });
gulp.task('favicon', function() {
    return gulp.src('app/favicon.ico')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/'));
});

gulp.task('scripts_min', function() {
    return gulp.src([
        'app/js/main.js'
    ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts_map_min', function() {
    return gulp.src([
        'app/js/map.js'
    ])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('clear', function () {
    return cache.clearAll();
});


gulp.task('default', ['watch']);  // develop -> gulp


gulp.task('build', ['clean', 'img', 'favicon', 'sass', 'scripts_min', 'scripts_map_min', 'css-min', 'page'], function() {});  // Build -> gulp build