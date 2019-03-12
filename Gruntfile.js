module.exports = function(grunt){
  grunt.initConfig({
    uglify: {
      release: {
        files: {
          'dist/rectangle.min.js': ['./rectangle.js'],
          'dist/calc.min.js':['./calc.js']
        }
      }             
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default',['uglify']);
};
