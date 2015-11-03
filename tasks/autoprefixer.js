// Adds vendor prefixes automatically
// https://github.com/nDmitry/grunt-autoprefixer
module.exports = {
  options: {
    browsers: [
      'last 2 version'
    ]
  },
  files: {
    src: ['<%= css %>']
  }
};
