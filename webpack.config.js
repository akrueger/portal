const precss = require('precss')
const autoprefixer = require('autoprefixer')
const jeet = require('jeet')
const yeticss = require('yeticss')
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
			loaders: ['style', 'css', 'stylus', 'postcss']
		}]
	},
	stylus: {
		use: [jeet(), yeticss()]
	},
	postcss() {
		return [precss, autoprefixer]
	}
}
