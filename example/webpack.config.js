const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "production",
  entry: __dirname + "/entry.js",
  output: {
    path: __dirname + "/../example-dist",
    filename: "[name].[hash].js",
  },
  devServer: {
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "vue-scroll-picker": __dirname + "/../src/index.js",
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: "index.html",
      template: __dirname + "/index.html"
    })
  ],
}
