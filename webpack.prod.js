const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const DotenvWebpack = require("dotenv-webpack")

/** @type {import('webpack').Configuration} */
module.exports = {
	mode: "production",
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
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
		new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
		new DotenvWebpack({ path: ".env.production" })
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
	}
}
