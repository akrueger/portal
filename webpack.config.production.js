const path = require('path')
const webpack = require('webpack')
const poststylus = require('poststylus')
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
		new ExtractTextPlugin('style.css', { allChunks: false })
	],
	devtool: 'cheap-module-source-map',
	entry: {
		app: ['./src/main.jsx']
	},
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
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
		}]
	},
	stylus: {
		use: [
			yeticss(),
			poststylus(['autoprefixer'])
		]
	}
}
