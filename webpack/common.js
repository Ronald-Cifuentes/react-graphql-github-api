const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: "./src",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].[contenthash].js"
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				use: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json"]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "public/index.html"
		})
	],
	devtool: "eval-source-map"
}
