module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      'react-pdf': 'react-pdf/dist/entry.noworker.js',
    });

    return config;
  },
};
