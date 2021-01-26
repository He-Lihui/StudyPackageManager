const path = require('path')
const{ CleanWebpackPlugin }= require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
class MyPlugin{
    apply(compiler){
        compiler.hooks.emit.tap('MyPlugin',compilation =>{
            for(const name in  compilation.assets)
            if(name.endsWith('.js')){
                const contents = compilation.assets[name].source()
                const withoutComments = contents.replace(/\/\*\*+\//g,'')
                compilation.assets[name] = {
                    source: () => withoutComments,
                    size:() => withoutComments.length
                }
            }

        })
    }
}
module.exports = {
    mode:'none',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.join(__dirname,'output'),
        // publicPath:'output/'
    },
    module:{
        rules:[
            {
                test : /\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.jpg$/,
                use:'file-loader'
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader',
                    options:{
                        attrs:['img:src','a:href']
                    }
                }
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'html-webpack-plugins',
            meta:{
                viewport:'width= device-width'
            },
            template:'./src/index.html'

        }),
        new HtmlWebpackPlugin({
            filename:'about.html'
        }),
        //上线前不会常使用这个插件
        new CopyWebpackPlugin([
            'public'
        ]),
        new MyPlugin()
    ],
    devServer:{
        contentBase:[
            './public'
        ]
    }
}
