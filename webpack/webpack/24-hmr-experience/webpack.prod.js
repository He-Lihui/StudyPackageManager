const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(['public'])
    ]
})

// yarn webpack --config webpack.prod.js