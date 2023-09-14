const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js", // the name of the bundle
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/, // excluding the node_modules folder
        // use: {
        // loader: "babel-loader",
        loader: 'ts-loader',
        // },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};