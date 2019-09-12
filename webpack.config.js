const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

let config = {

	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, './dist'),	
		filename: 'js/main.js',// out path:
		publicPath: 'dist/',
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),	
		overlay: false,
	},

	module: {
	  rules: [
		{
		  test: /\.html$/,
		  use: [
			{
			  loader: "html-loader",
			  options: { minimize: false },
			},
		   ],
		},
		{
		  test: /\.css$/,
		  use: [
			{
			  loader: MiniCssExtractPlugin.loader,
			  options: {
				// you can specify a publicPath here
				// by default it uses publicPath in webpackOptions.output
			    publicPath: '../',
				hmr: process.env.NODE_ENV === 'development',
			  },
			},
			'css-loader',
		   ],
		},
	  ],
	},


    plugins: [
	  new HtmlWebPackPlugin({
		  title: 'custom',
		  template: "./src/index.html",
		  filename: "./index.html", // out path:
	  }),
	  new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// all options are optional
		filename: 'css/[name].css',// out path:
		chunkFilename: '[id].css',
		ignoreOrder: false, // Enable to remove warnings about conflicting order
	  }),
	],

	//devtool: 'chaeap-eval-source-map',
};

module.exports = (env, options) => {
	//console.log(options);
	let production = options.mode === 'production';

	config.devtool = production
						? false
						: 'chaeap-eval-source-map';
	return config;
}
