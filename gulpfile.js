// ESSA PARTE COM CONST IMPORTA OS PLUGINS 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Importando os pacotes do sass
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify'); // Importação do pacote que comprime js
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin'); // Comprimir imagens

// Funções

function comprimeImagens() {
    return gulp.src('./source/images/*', {encoding: false})
        .pipe(imagemin()) // Comprime as imagens
        .pipe(gulp.dest('./build/images'));build
}

function comprimeJavaScript() { // Tarefa para comprimir JS
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify()) // Minifica os arquivos JS
        .pipe(obfuscate()) // Ofusca para proteger o código
        .pipe(gulp.dest('./build/scripts')) // Corrigido 'biuld' para 'build'
}

function compilaSass() { // Responsável por compilar do SASS para CSS
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' // Compila e comprime o CSS
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); // Corrigido 'biuld' para 'build'
}



// Exportando plugins para as funções


exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}

