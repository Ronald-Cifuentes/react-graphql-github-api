const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const DotenvWebpack = require("dotenv-webpack")
require("dotenv").config({ path: ".env.development" })

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: "development",
	entry: "./src/app",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				use: "babel-loader"
			},
			{
				test: /.(css|s[ac]ss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: ["image-webpack-loader"],
				type: "asset"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"],
		alias: {
			"@": path.resolve(__dirname, "src")
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new DotenvWebpack({ path: ".env.production" })
	],
	devServer: {
		port: process.env.PORT,
		historyApiFallback: true
	}
}
