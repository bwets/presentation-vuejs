const builder = require("./webpack.shared.js");
const TerserPlugin = require('terser-webpack-plugin')
module.exports = env => {

	var config = builder.createConfiguration(env);
	config.mode = "production";

	// config.optimization = {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 		maxSize: 200000
	// 	}
	// };
	config.optimization.minimizer = [new TerserPlugin({
		sourceMap: true,
		parallel: true,
		cache: './.build_cache/terser',
		exclude: /transpiledLibs/,
		terserOptions: {
			warnings: false,
			ie8: false
		}
	})]

	return config;

};