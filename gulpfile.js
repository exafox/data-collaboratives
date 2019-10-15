var gulp            = require('gulp'),
    shell           = require('gulp-shell'),
    ghPages         = require('gulp-gh-pages-gift'),
    imagemin        = require('gulp-imagemin'),
    cp              = require('child_process'),
    runSequence     = require('run-sequence').use(gulp);

gulp.task('image', function () {
  return gulp.src('source/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('_site/images'));
});

gulp.task('scripts', function () {
  return gulp.src('source/scripts/**/*')
    .pipe(gulp.dest('_site/scripts'));
});

gulp.task('cname', function() {
  return gulp.src('source/CNAME')
  .pipe(gulp.dest('_site'));
});

gulp.task('static', function() {
  return gulp.src('source/static/**/*')
  .pipe(gulp.dest('_site'));
});

gulp.task('push-gh-master', shell.task(['git push origin master']));

gulp.task('contentful', shell.task(['bundle exec jekyll contentful --rebuild']));

gulp.task('push-gh-pages', function () {
  return gulp.src('_site/**/*')
    .pipe(ghPages({ force: true }));
});

gulp.task('deploy', gulp.series('image', 'cname', 'scripts', 'static', 'push-gh-master', 'push-gh-pages'));