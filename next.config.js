module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/projects/': { page: '/projects' },
      // '/blog': { page: '/blog' },
      // '/blog/': { page: '/blog' },
    };
  },
};
