let path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 多入口
    entry:{
        home:"./src/index.js",
        other:'./src/other.js'
    },
    output:{
        // [name] home,other 当然在加个hash也是可以的.[hash]
        filename:"[name].js",
        path: path.resolve(__dirname,'dist')
    },
    plugins:[
        /*多入口则多new*/
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'home.html',
            chunks: ['home'] //chunks意思是代码块
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'other.html',
            chunks: ['other']
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:['@babel/preset-env']
                    }
                }

            }
        ]
    }
};
