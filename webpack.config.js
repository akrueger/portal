const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
	plugins: [
		new Visualizer()
	],
	devtool: 'eval-source-map',
	entry: './src/main.jsx',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		preloaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'eslint'
		}],
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		},
		{
			test: /\.css$/,
			exclude: /node_modules/,
			loaders: ['style', 'css']
		}]
	},
}
