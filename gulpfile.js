var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

var watchedFiles = [
    '*.js', 
    'src/**/*.js', 
    '*.scss', 
    'src/**/*.js'
];


gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };

    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('sass', function () {
  return gulp.src('./src/assets/sass/musicAndColour.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['inject'], function(){
    var options = {
        script: 'app.js',
        delayTime: 1,
        ext: 'js,scss',
        env: {
            'PORT': 5000
        },
        watch: watchedFiles  
    };

    return nodemon(options).on('restart', function(ev) {
        console.log('Restarting...');
    });
});
