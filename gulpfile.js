var gulp   = require('gulp');
var sketch = require('gulp-sketch');
var shell = require('gulp-shell');

//导出sketch资源的任务
gulp.task('sketch', function(){
  return gulp.src('./src/*.sketch')
    .pipe(sketch({
      export: 'artboards',
      items: 'concept_b',
      formats: 'png',
      scales: '2.0'
    }))
    .pipe(gulp.dest('./dist/images/'));
});

//在gulp执行shell命令
gulp.task('cmd', shell.task([
    'echo hello'
]))

//监视sketch源文件是否有改动，有的话就执行sketch任务
gulp.task('auto', function() {
    gulp.watch('src/*.sketch', ['sketch'])
})

//使用gulp做为默认命令执行文件中的所有任务
gulp.task('default', ['sketch', 'auto'])
