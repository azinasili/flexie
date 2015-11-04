'use strict';

module.exports = function(grunt) {
  // Load all grunt tasks at once
  // https://github.com/firstandthird/load-grunt-config
  require('load-grunt-config')(grunt, {
    // Path to grunt tasks
    configPath: require('path').join(process.cwd(), 'tasks'),

    // Options passed into config.  Can use with <%= foo %>
    data: {
      css    : '<%= test %>/css/yoga.css',
      scss   : '<%= test %>/css/yoga-grid.scss',
      test   : 'test',
      port   : 9000,
      reload : 35729
    }
  });

  // Default build task: compiles test css
  // Run `grunt` on the command line
  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'connect:livereload',
    'open',
    'watch'
  ]);
};
