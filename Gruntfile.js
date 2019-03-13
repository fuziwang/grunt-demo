module.exports = function(grunt){
  grunt.initConfig({
    mochacli:{
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    },
    run:{
      api:{
        options: { wait: false  },
        args: ['./app.js'] 
      }  
    },
  });


  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default',['run','mochacli','stop']);
};
