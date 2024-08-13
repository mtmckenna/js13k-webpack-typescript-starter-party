const { merge } = require("webpack-merge");

const common = require("./webpack.common.cjs");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    usedExports: true,
    minimizer: [
      new TerserJSPlugin({
        terserOptions: { compress: true, mangle: { properties: true } },
      }),
      new HtmlMinimizerPlugin({minimizerOptions: { minifyJS: false}})
    ],
    minimize: true,
  },
  output: {
    path: path.join(process.cwd(), "dist"),
  },
  plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: false, analyzerMode: "static" }),
  ],
});
