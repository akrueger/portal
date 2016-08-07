const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')
const yeticss = require('yeticss')

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
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Andrew Krueger',
			template: 'index.ejs',
			minify: {
				quoteCharacter: '\'',
				html5: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true
			}
		})
	],
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
			yeticss(),
			poststylus(['autoprefixer'])
		]
	}
}
