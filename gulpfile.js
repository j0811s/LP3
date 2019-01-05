// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
 
// style.scssの監視タスクを作成する
gulp.task('default', function () {
  // ★ style.scssファイルを監視
  return gulp.watch('css/scss/style.scss', function () {
    // style.scssの更新があった場合の処理
    // style.scssファイルを取得
    return gulp.src('css/scss/style.scss')
      //autoprefixerの実行
      .pipe(autoprefixer({
        browsers: ['last 2 Chrome versions'],
        cascade: false
      }))
      // Sassのコンパイルを実行
      .pipe(sass({
        outputStyle: 'expanded'
      })
      // Sassのコンパイルエラーを表示
      // (これがないと自動的に止まってしまう)
      .on('error', sass.logError))
      // cssフォルダー以下に保存
      .pipe(gulp.dest('css'));
  });
});