const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = {
	optimization: {
		minimizer: [new TerserJSPlugin({})]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "src/index.html" }),
    new CleanWebpackPlugin(),
	],
	resolve: { extensions: [".ts", ".js"] },
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.glsl$/i,
				use: "raw-loader"
			}
		]
	}
};
