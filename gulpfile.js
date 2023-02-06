const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('declarations', () => {
    return tsProject.src()  
        .pipe(tsProject())
    // .d.ts files
        .dts.pipe(gulp.dest('dist'))

        // .js files
        .js.pipe(gulp.dest('dist'));
});


gulp.task("default", gulp.series("declarations"));

