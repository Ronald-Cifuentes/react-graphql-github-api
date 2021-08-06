const common = require("./common")
const { merge } = require("webpack-merge")
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const DotenvWebpack = require("dotenv-webpack")

/** @type {import('webpack').Configuration} */
const prodConf = {
	mode: "production",
	module: {
		rules: [
			{
				test: /.(css|s[ac]ss)$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				exclude: /node_modules/
			}
		]
	},
	plugins: [new DotenvWebpack({ path: ".env.production" }), new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" })],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
	}
}

const conf = merge(common, prodConf)
// console.log("prodConf :>>>> ", prodConf)

module.exports = conf
