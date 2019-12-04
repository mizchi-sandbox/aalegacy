module.exports = {
  target: "node",
  resolve: {
    extensions: [".ts", ".js"]
  },
  // output: {
  //   libraryTarget: "commonjs"
  // },
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
