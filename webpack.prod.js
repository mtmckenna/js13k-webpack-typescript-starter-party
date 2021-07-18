const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineChunkHtmlPlugin = require("./inline-chunk-html-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
  new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [".js"]),
  new BundleAnalyzerPlugin({openAnalyzer: false, analyzerMode: "static"})
  ]
});
