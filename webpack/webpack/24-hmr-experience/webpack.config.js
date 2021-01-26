const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')


module.exports = (env,argv) =>{
  const config= {
    mode: 'none',
    // mode: 'development',
    // mode: 'production',
    entry: './src/main.js',
    output: {
      filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Tutorial',
        template: './src/index.html'
      }),
      // new webpack.HotModuleReplacementPlugin()
     
    ],
    devServer:{
      open:true,
      port:3300,
      // hot:true
      // hotOnly:true
    }
  }
  if(env === 'production'){
    config.mode = 'production',
    config.devtool = false,
    config.plugins = [
      ...config.plugins,
      new CopyWebpackPlugin(['public']),
      new CleanWebpackPlugin()
    ]
  }
  return config
}