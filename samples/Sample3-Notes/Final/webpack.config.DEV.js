const builder = require("./webpack.shared.js")
var CleanObsoleteChunks = require('webpack-clean-obsolete-chunks');


module.exports = env => {

	var config = builder.createConfiguration(env);

	// apply dev settings
	config.devtool = "inline-source-map";
	config.mode = "development";

	config.plugins.push(new CleanObsoleteChunks());
	return config;
};