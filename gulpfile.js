var gulp   = require('gulp');
var sketch = require('gulp-sketch');
var shell = require('gulp-shell');
var server = require('gulp-server-livereload');

//监视sketch源文件是否有改动，有的话就执行sketch和export_slices任务
gulp.task('auto', function() {
    gulp.watch('src/*.sketch', ['sketch', 'export_slices'])
})

//导出sketch画板为2x PNG文件
gulp.task('sketch', function(){
  return gulp.src('./src/*.sketch') //监视src目录下所有sketch文件
    .pipe(sketch({
      export: 'artboards', //导出类型为artboard
      items: 'home', //导出的artboard名称
      formats: 'png', //导出的格式
      scales: '2.0' //导出2x尺寸
    }))
    .pipe(gulp.dest('./dist/images/')); //将导出的png文件放在dist/images/目录下
});

//导出sketch中已经定义好的资源
gulp.task('export_slices', function() {
    return gulp.src('./src/*.sketch')
        .pipe(sketch({
            export: 'slices',
            formats: 'png',
            scales: '1.0, 2.0'
        }))
        .pipe(gulp.dest('./dist/images/'));
})

//创建web服务器和livereload
gulp.task('webserver', function() {
  gulp.src('dist') //监视路径
    .pipe(server({
        defaultFile: 'index.html', //设定默认文件为index.html
        livereload: true,
        directoryListing: true,
        open: true
    }));
});

//使用gulp做为默认命令执行文件中的所有任务
gulp.task('default', ['auto', 'sketch', 'export_slices', 'webserver'])
