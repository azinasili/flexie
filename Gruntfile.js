'use strict';

/**
 * Livereload and connect variables
 */
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({
  port: LIVERELOAD_PORT
});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

/**
 * Grunt module
 */
module.exports = function (grunt) {

  /**
   * Dynamically load npm tasks
   */
  require('load-grunt-tasks')(grunt);

  /**
   * Grunt config
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project info
     */
    project: {
      src  : 'src',
      app  : 'demo',
      css  : '<%= project.app %>/css/flexie.css',
      scss : '<%= project.src %>/flexie-grid.scss'
    },

    /**
     * Project banner
     * Dynamically appended to CSS files
     * Inherits text from package.json
     */
    tag: {
      banner: '/**!\n' +
              ' * <%= pkg.name %>\n' +
              ' * <%= pkg.title %>\n' +
              ' * <%= pkg.url %>\n' +
              ' * @author <%= pkg.author %>\n' +
              ' * @version <%= pkg.version %>\n' +
              ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
              ' */\n'
    },

    /**
     * Connect port/livereload
     * https://github.com/gruntjs/grunt-contrib-connect
     * Starts a local webserver and injects
     * livereload snippet
     */
    connect: {
      options: {
        port: 9000,
        hostname: '*'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [lrSnippet, mountFolder(connect, 'demo')];
          }
        }
      }
    },

    /**
     * Compile Sass/SCSS files
     * https://github.com/gruntjs/grunt-contrib-sass
     * Compiles all Sass/SCSS files and appends project banner
     */
    sass: {
      dist: {
        options: {
          cacheLocation : '_tmp',
          sourcemap     : 'none',
          style         : 'expanded'
        },
        files: {
          '<%= project.css %>' : '<%= project.scss %>'
        }
      }
    },

    /**
     * Autoprefixer
     * Adds vendor prefixes automatically
     * https://github.com/nDmitry/grunt-autoprefixer
     */
    autoprefixer: {
      options: {
        browsers: [
          'last 2 version'
        ]
      },
      dist: {
        files: {
          '<%= project.css %>' : '<%= project.css %>'
        }
      }
    },

    /**
     * CSSMin
     * CSS minification
     * https://github.com/gruntjs/grunt-contrib-cssmin
     */
    cssmin: {
      combine: {
        options: {
          banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.css %>' : '<%= project.css %>'
        }
      }
    },

    /**
     * Opens the web server in the browser
     * https://github.com/jsoverson/grunt-open
     */
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },

    /**
     * Runs tasks against changed watched files
     * https://github.com/gruntjs/grunt-contrib-watch
     * Watching development files and run concat/compile tasks
     * Livereload the browser once complete
     */
    watch: {
      sass: {
        files: '<%= project.src %>/{,*/}*.{scss,sass}',
        tasks: ['sass', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= project.app %>/{,*/}*.html',
          '<%= project.css %>'
        ]
      }
    }
  });

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'cssmin',
    'connect:livereload',
    'open',
    'watch'
  ]);

};
