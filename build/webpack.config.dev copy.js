const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

let externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
];

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../packages/iui/index.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'lib.js',
    libraryTarget: 'umd',
    library: 'IUi',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  externals,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  
  plugins: [
    new VueLoaderPlugin()
  ]
};
