const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '/'),
    filename: 'gittoken-svg-icons.dist.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }, {
        test : /.json?$/,
        loader : "json-loader"
      },{
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader'
        }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    })
  ]
}
