const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
module.exports = {
    mode:"development",
    entry: path.resolve(__dirname , '../packages/iui/index.js'),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: 'lib.js',
        libraryTarget: 'umd',
        library: 'Vue',
        // umdNamedDefine: true,
        globalObject: 'typeof self !== \'undefined\' ? self : this',
      },
    // module: {
    //     rules: [
    //       {
    //         test: /\.vue$/,
    //         use: 'vue-loader'
    //       },
    //       {
    //         test: /\.(ts|js)x?$/,
    //         exclude: /node_modules/,
    //         loader: 'babel-loader',
    //       },
    //     ]
    //   },
    //   resolve: {
    //     extensions: ['.ts', '.tsx', '.js', '.json'],
    //   },
    //   plugins: [
    //     new VueLoaderPlugin()
    // ]

}