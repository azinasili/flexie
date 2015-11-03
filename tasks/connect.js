// Connect port/livereload
// Starts a local webserver and injects
// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
  options: {
    port: '<%= port %>',
    hostname: '*'
  },
  livereload: {
    options: {
      middleware: function (connect) {
        return [
          require('connect-livereload')({
            port: '<%= port %>'
          }),
          connect.static(require('path').resolve('test'))
        ];
      }
    }
  }
};
