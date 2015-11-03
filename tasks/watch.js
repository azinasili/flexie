// Runs tasks against changed watched files
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
  sass: {
    files: '<%= scss %>',
    tasks: ['sass', 'autoprefixer']
  },
  livereload: {
    options: {
      livereload: '<%= reload %>'
    },
    files: [
      '<%= test %>/{,*/}*.html',
      '<%= css %>'
    ]
  }
};
