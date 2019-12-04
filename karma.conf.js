var webpackConfig = require("./webpack.config");

const customLaunchers = {
  ie_no_addons: {
    base: "IE",
    flags: ["-extoff"]
  }
};

module.exports = function(config) {
  config.set({
    mime: {
      "text/x-typescript": ["ts", "tsx"]
    },
    basePath: "",
    frameworks: ["jasmine"],
    // patterns to load in the browser
    files: ["src/__tests__/*.browser-test.ts"],
    exclude: [],
    preprocessors: {
      "src/__tests__/*.browser-test.ts": ["webpack"]
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["ChromeHeadless"],
    singleRun: false,
    concurrency: Infinity,
    customLaunchers
  });
};
