const webpack = require('webpack')
const precss = require('precss')
const autoprefixer = require('autoprefixer')
const jeet = require('jeet')
const yeticss = require('yeticss')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new ExtractTextPlugin('style.css')
	],
	devtool: 'cheap-module-source-map',
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
			loaders: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader!postcss-loader')
		}]
	},
	stylus: {
		use: [jeet(), yeticss()]
	},
	postcss() {
		return [precss, autoprefixer]
	}
}
