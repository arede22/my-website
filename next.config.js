module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      // '/post/id1': { page: '/blog/post/id1' },
    };
  },
};
