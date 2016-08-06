const path = require('path')
const poststylus = require('poststylus')

module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './build',
	},
	entry: './src/main.jsx',
	output: {
		path: path.resolve(__dirname, 'build'),
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
			test: /\.styl$/,
			exclude: /node_modules/,
			loaders: ['style', 'css', 'stylus']
		}]
	},
	stylus: {
		use: [
			poststylus(['autoprefixer'])
		]
	}
}
