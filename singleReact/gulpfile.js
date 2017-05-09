var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');

var paths = {
  scripts: {
    src: 'src/**/*.js',
    dest: 'assets/scripts/'
  }
};

/**
 * 并非所有的任务都是基于流，例如删除文件
 * 一个 gulpfile 只是一个 Node 程序，在 gulpfile 中可以使用任何 npm 中的模块或者其他 Node.js 程序
 */
function clean() {
  // del 也可以和 `gulp.src` 一样可以基于模式匹配的文件路径定义方式 
  return del([ 'assets' ]);
}

/*
 * 通过 Javascript 函数的方式定义任务
 */

/**
 * 编译 coffee 文件，然后压缩代码，然后合并到 all.min.js
 * 并生成 coffee 源码的 sourcemap
 */
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

/**
 * 监控文件，当文件改变过后做对应的任务
 * @return {[type]} [description]
 */
function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

/*
 * 使用 CommonJS `exports` 模块的方式定义任务
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;

/*
 * 确定任务是以并行还是串行的方式定义任务
 */
var build = gulp.series(clean, gulp.parallel(styles, scripts));

/*
 * 除了 export 的方式，也可以使用 gulp.task 的方式定义任务
 */
gulp.task('build', build);

/*
 * 定义默认任务，默认任务可以直接通过 gulp 的方式调用
 */
gulp.task('default', build);