const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
		contentBase: './dist',
		hot: false,
		inline: false,
		host: "0.0.0.0"
  },
});
