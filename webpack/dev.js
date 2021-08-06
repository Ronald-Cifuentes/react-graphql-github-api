const common = require("./common")
const { merge } = require("webpack-merge")
const DotenvWebpack = require("dotenv-webpack")
require("dotenv").config({ path: ".env.development" })

/** @type {import('webpack').Configuration} */
const devConf = {
	mode: "development",
	module: {
		rules: [
			{
				test: /.(css|s[ac]ss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [new DotenvWebpack({ path: ".env.development" })],
	devServer: {
		port: process.env.PORT,
		historyApiFallback: true
	}
}
const conf = merge(common, devConf)
// console.log("devConf :>>>> ", conf.module.rules)

module.exports = conf
