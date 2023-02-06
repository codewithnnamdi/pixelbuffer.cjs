const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('d:ts', () => {
    return tsProject.src()  
        .pipe(tsProject())
        .dts.pipe(gulp.dest('src/@types'));
});


gulp.task("default", gulp.series("d:ts"));

