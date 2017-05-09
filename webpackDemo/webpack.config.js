module.exports = {
	
    entry: __dirname + '/src/ManageSystem.js',/*这个是打包对象路径*/
	output: {
	    path: __dirname + '/build',
		filename: "bundle.js"
	},/*这个是输出对象路径和名称*/
	externals: {
	    'react': 'React'
	},/*外部文件：*/
	devtool: 'eval-source-map',  //生成source file
	module: {
	    loaders: [
		  {
		    test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
			  presets: ['es2015', 'react']
			}
		  }
		]
	}
};