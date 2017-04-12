var CopyWebpackPlugin = require('copy-webpack-plugin');
var path=require("path");
var webpack=require("webpack");


module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js"
  },
  module: {
     
    loaders: [
      {
        test: /\.js$/,        // Match both .js and .jsx files
        exclude: /node_modules/,
       loader: "babel-loader"
                

      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(__dirname, 'client')
      },
    ]

  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
    proxy: {
  "/api": "http://localhost:8080",
  
}
  },
  plugins: [
new CopyWebpackPlugin([
      { from: './src/index.html', to: path.resolve(__dirname, 'public')}
    ]),
    new webpack.DefinePlugin({ 'typeof window': '\"object\"' })
  ]
};
