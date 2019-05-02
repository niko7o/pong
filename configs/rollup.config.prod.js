import minify from 'rollup-plugin-babel-minify';

export default {
    input: 'src/game.js',
    output: {
        file: 'dist/bundle.min.js',
        format: 'iife'
    },
    plugins: [minify()]
}