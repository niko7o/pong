import minify from 'rollup-plugin-babel-minify';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.min.js',
        format: 'iife'
    },
    plugins: [minify()]
}