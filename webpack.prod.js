const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("./inline-chunk-html-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  plugins: [
  new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [".js"]),
  new BundleAnalyzerPlugin({analyzerMode: "static"})
  ]
});
