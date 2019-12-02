const webpack = require("webpack");
const path = require("path");

const customLaunchers = {
  ie_no_addons: {
    base: "IE",
    flags: ["-extoff"]
  }
};

module.exports = config => ({
  frameworks: ["jasmine"],
  reporters: ["progress"],
  client: {
    jasmine: {
      random: false,
      // seed: "4321",
      oneFailurePerSpec: true,
      failFast: true,
      timeoutInterval: 5000
    }
  },
  colors: true,
  // logLevel: config.LOG_INFO,
  // timeout: 30 * 1000,
  webpack: {
    mode: "development",
    resolve: {
      extensions: [".ts"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "babel-loader"
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.test": true
      })
    ]
  },
  files: ["./src/__tests__/*.browser-test.ts"],
  customLaunchers
});
