module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        files: {
          'public/js/script.min.js': ['src/**/*.js']
        }
      }
    },

    less: {
      build: {
        files: {
          'public/css/style.css': 'src/less/master.less'
        }
      }
    },

    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> \n*/\n'
      },
      build: {
        files: {
          'public/css/style.min.css': 'public/css/style.css'
        }
      }
    },


  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['uglify', 'less', 'cssmin']);

};