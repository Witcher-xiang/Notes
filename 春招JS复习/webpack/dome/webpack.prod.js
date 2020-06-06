/*生产环境下的配置*/
let path = require("path"); //因为是node所以是commonJS
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //抽离css文件专门将css文件放到一个文件下
const Optimize =require("optimize-css-assets-webpack-plugin"); //懒的用上古版本压缩


module.exports = {
    /*可以生成创建html的入口文件,即localhost自动去创建一个html去运行本地服务*/
    /*安装的devServer 只是内存中的打包本地服务器*/
    devServer:{
        port:3000,              //默认端口号
        progress:true,          // 是否有加载进度条
        contentBase:'./build',  // 基于哪个目录下的文件
        open:true,               // 是否自动打开浏览器
        compress:false             //设置是否压缩
    },
    mode : "development", //development production
    entry : "./src/index.js", // 入口
    output: {
        filename:"bundle.js", // 打包后的文件名
        path: path.resolve(__dirname,"build") // dirname指当前路径 path是绝对路径的一个方法
    },
    module: { // 模块
        rules:[ //规则 css-loader 解析 @import这种语法
            // style-loader 他是把css 插入到head标签中
            // loader的特点 希望单一
            // loader的用法  字符串只用一个loader
            // 多个loader需要 []
            // loader的顺序  默认从右向左执行
            // loader还可以写成 对象方式
            {   test: /\.css$/,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        //"style-loader", //这个是将css代码嵌入到header中的
                        'css-loader', // @import 解析路径
                        'postcss-loader',// 自动添加前缀,需要一个PostCSS的配置项
                    ]
            },
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
            {   /*图片配置*/
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
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
        })
    ],
};
