// Compile Sass/SCSS files
// https://github.com/gruntjs/grunt-contrib-sass
module.exports = {
  dist: {
    options: {
      precision     : 4,
      sourcemap     : 'none',
      style         : 'expanded'
    },
    files: {
      '<%= css %>' : '<%= scss %>'
    }
  }
};
