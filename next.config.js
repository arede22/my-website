module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      // '/blog/posts/[id]': { page: '/blog/posts/[id]' },
    };
  },
};
