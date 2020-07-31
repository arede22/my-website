module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      // '/blog/post/[id]': { page: '/blog/post/[id]' },
    };
  },
};
