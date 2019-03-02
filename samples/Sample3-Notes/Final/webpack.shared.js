const Path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require("webpack");

module.exports = {
	createConfiguration: function (env) {
		const config = {};
		config.mode = "development";
		config.output = {
			path: Path.resolve(__dirname, "wwwroot/build"),
			filename: '[name].js'
		};
		config.module = {
			noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,

					use: [
						{
							loader: "babel-loader",
							options: {
								sourceMap: false,
							}
						}
					]


				},
				{
					test: /\.vue$/,
					exclude: /node_modules/,
					loader: "vue-loader"
				},
				{
					test: /\.tsx?$/,
					loader: 'ts-loader',
					exclude: /node_modules/,
					options: {
						appendTsSuffixTo: [/\.vue$/],
					}
				},
				{
					test: /\.styl$/,
					exclude: /node_modules/,
					loader: ["style-loader", "css-loader", "stylus-loader"]
				},
				{
					test: /\.(sass|scss|css)$/,
					exclude: /node_modules/,

					use: [
						{ loader: 'vue-style-loader', options: { sourceMap: false } },
						{ loader: "style-loader", options: { sourceMap: false } },
						{ loader: "css-loader", options: { sourceMap: false } },
						{
							loader: "sass-loader",
							options: {
								sourceMap: false,
								includePaths: [
									"Client/Assets/Style",
									Path.resolve(__dirname, "Client/Assets/Style"),
								]
							}
						}
					]
				}
			]
		};

		config.plugins = [
			new VueLoaderPlugin(),
			// new webpack.ProvidePlugin({
			// 	$: 'jquery',
			// 	jQuery: 'jquery'
			// }),
			new webpack.ProvidePlugin({
				_: 'lodash',
			}),
			// new webpack.ProvidePlugin({
			// 	kendo: '@progress/kendo-ui',
			// })

		];




		config.resolveLoader = {
			modules: [
				Path.join(__dirname, "node_modules")
			]
		};
		config.resolve = {
			extensions: ["*", ".vue", ".js", ".css", ".scss", ".ts", ".tsx"],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				"node_modules": Path.join(__dirname, "node_modules"),
				"~": Path.join(__dirname, "Client"),
				assets: Path.join(__dirname, "Client/Assets"),

			}
		};

		config.entry = {
			"app": ["@babel/polyfill", `./Client/App/Main.ts`],
		};

		return config;

	}
};


