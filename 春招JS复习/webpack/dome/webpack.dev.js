/*开发环境下的配置*/
let path = require("path"); //因为是node所以是commonJS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css文件专门将css文件放到一个文件下
const Optimize =require("optimize-css-assets-webpack-plugin"); //懒的用上古版本压缩
const webpack = require('webpack');//启用热模块引用


module.exports = {
    /*可以生成创建html的入口文件,即localhost自动去创建一个html去运行本地服务*/
    /*安装的devServer 只是内存中的打包本地服务器*/
    devServer:{
        port:3000,              //默认端口号
        progress:false,          // 是否有加载进度条
        contentBase:'./build',  // 用于配置提供额外静态文件内容的目录，么搞懂他想表达什么
        open:true,               // 是否自动打开浏览器
        compress:false,             //设置是否压缩
        hot: true               // 启用热模块
    },
    mode : "development", //development production
    entry : "./src/index.jsx", // 入口
    devtool:"inline-source-map",//source map一个告诉你打包时错误源头在哪开发工具
    output: {
        filename:"bundle.js", // 打包后的文件名
        path: path.resolve(__dirname,"build"), // dirname指当前路径 path是绝对路径的一个方法
        // publicPath:'www.xx.com'/ 在输出的链接都加一个公有的路径 每个loader的options里单独加也可以
    },
    module: { // 模块loader将资源转化为webpack能够理解的程度（webpack只理解JS）
        // 默认从右到左执行 从下到上执行
        rules:[
            /*使得html中的img的src能直接使用 注意这里需要设置js图片处理下的esModule为false*/
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader',
                options:{
                    outputPath:'/img/'  //导出输出路径对资源分类管理
                }
            },
            /*Eslint语法规范校验*/
            // {
            //     test:/\.js$/,
            //     use:{
            //         loader:"eslint-loader",
            //
            //         enforce:"pre" //previous文档规定要在之前执行} 这个地方在去看下官网！一定
            //
            // },
            /*es6 -> es5的模块加载配置*/
            {   /*这里是js的配置 注意我没有配置es6的装饰器 需要的话再自己配置把*/
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            '@babel/plugin-proposal-class-properties', //解决class的es7语法
                           /* "@babel/plugin-transform-runtime" 这里没配置完 完事再试试*/
                        ]
                    }
                },
                exclude:/node_modules/ //除了node_modules以外，其他都使用这个插件
            },
            //规则 css-loader 解析 @import这种语法
            // style-loader 他是把css 插入到head标签中
            // loader的特点 希望单一
            // loader的用法  字符串只用一个loader
            // 多个loader需要 []
            // loader的顺序  默认从右向左执行
            // loader还可以写成 对象方式
            /*css的loader配置*/
            {   test: /\.css$/,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        //"style-loader", //这个是将css代码嵌入到header中的
                        'css-loader', // @import 解析路径
                        'postcss-loader',// 自动添加前缀,需要一个PostCSS的配置项
                    ]
            },
            /*.less配置*/
            {   test: /\.less$/,
                use:
                    [
                       // "style-loader",
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                         'less-loader' //  把less - > css 这个有问题
                    ]
            },
            /*图片配置*/
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                       loader: 'file-loader',
                        options: {
                           esModule:false,
                            outputPath:'/img/'  //导出输出路径对资源分类管理
                       }
                    }
                ]
            }
        ]
    },
    plugins: [  //数组内放所有插件
        new HtmlWebpackPlugin({ // 打包输出HTML
            title: 'Hello World app',
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
              //  minifyCSS: true// 压缩内联css
            },
            hash:true,
            filename: 'index.html',
            template: './src/index.html'//将哪个放入缓存直接的加载页面
        }),
        new MiniCssExtractPlugin({
            filename:"main.css"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};
