var webpack = require('webpack');
var autoprefixer = require('autoprefixer-loader');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: __dirname + '/app/main.js'
    },

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js',
    },

    module: {

        loaders: [

            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'less-loader']
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }, {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热模块替换插件
    ],
    // webpack-dev-server
    devServer: {
        hot: true,
        contentBase: './build',
        historyApiFallback: true,
        inline: true,


    }

};