const path = require('path');

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve('src'),
  //     '@components': path.resolve('../src/components'),
  //     '@styles': path.resolve('../src/styles'),
  //   }
  // },
  // webpack: function (config) {
  //   config.resolve.alias = {
  //     '@': path.resolve('src'),
  //     '@components': path.resolve('src/components'),
  //     '@styles': path.resolve('src/styles'),
  //   };
  //   return config
  // }
};
