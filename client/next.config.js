const withStyles = require("@webdeb/next-styles");

module.exports = withStyles({
  sass: true,
  modules: true,
});

module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};
