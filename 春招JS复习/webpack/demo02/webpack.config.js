let path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require('webpack');
module.exports = {
    devServer:{
        hotOnly:false,            //只允许热模块更新 但是启用后浏览器无法自动刷新
        hot: true,               // 启用热模块
        port:3000,              //默认端口号
        progress:false,          // 是否有加载进度条
        contentBase:'./build',  // 用于配置提供额外静态文件内容的目录，么搞懂他想表达什么
        open:true,               // 是否自动打开浏览器
        compress:false,             //设置是否压缩
        proxy:{
            '/api':{
                target:"http://localhost:3000",
                pathRewrite:{"/api":""} //在发送请求前去除path
            } //配置了一个代理，可以解决跨域问题
        }
    },
    entry: "./src/index.jsx",
    devtool:"source-map", //增加映射文件，帮助代码调试
    //devtool:"eval-source-map", //不会产生单独的文件，但是可以显示行和列
   // devtool:"chap-module-source-map", //不会产生列 但是是一个单独的映射文件

    resolve:{ //这玩意就是映入第三方包的 还能设置别名 方便在项目中引入
        modules:[path.resolve('node_modules')]
    },
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname,'build')
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
    ],
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude:/node_module/,
                use: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                    options:{
                        presets:['@babel/preset-env',"@babel/preset-react"]
                    }
                }

            }
        ]
    }
};
