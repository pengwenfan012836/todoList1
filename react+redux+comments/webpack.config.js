var webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/app/App.js',
    output: {
        path: __dirname + '/bundle/',
        filename: 'bundle.js',
    },
    module: {

        loaders: [

            {
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
}