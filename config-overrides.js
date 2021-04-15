const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    alias: {
      Components: path.resolve(__dirname, "./src/components/"),
      Images: path.resolve(__dirname, "./src/images/"),
      Utils: path.resolve(__dirname, "./src/utils/"),
      Store: path.resolve(__dirname, "./src/store/"),
      Hooks: path.resolve(__dirname, "./src/custom-hooks/"),
      Constants: path.resolve(__dirname, "./src/constants/"),
    },
  };
  return config;
};
