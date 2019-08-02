
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    module: {
        exprContextCritical: false
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node'
};
