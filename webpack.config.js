module.exports = {
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /.ts/,
        use: "babel-loader"
      }
    ]
  },
  devtool: false
};
