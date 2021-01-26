const webpack = require('webpack')
const path = require('path')
module.exports = {
    mode:'none',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'output')
    },
    plugins:[
        // new webpack.DefinePlugin({
        //     // API_BASE_URL:'"https://api.example.com"'
        //     API_BASE_URL: JSON.stringify('https://api.example.com')
        // })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                       presets:[
                        //    ['@babel/preset-env',{modules:'commonjs'}]
                        ['@babel/preset-env',{modules:false}]
                       ]
                    }
                }
            }
        ]
    },
    /**
     * optimization
     * 最佳化，优化
     *
    */
    optimization:{
        // 标记未引用文件、参数、变量、对象等
        usedExports: true,
        // 合并模块
        // concatenateModules:true,
        // 压缩模块
        // minimize:true
        sideEffects:true
    }
}
/**
 * definePlugin的主要作用
 * 注入自定义代码，或者添加一些小的配置文件
 *
*/