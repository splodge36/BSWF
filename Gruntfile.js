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

    imagemin: {  
      dynamic: {
        options: {                       // Target options 
          optimizationLevel: 7,
        },                         // Another target 
        files: [{
          expand: true,                  // Enable dynamic expansion 
          cwd: 'src/images/',                   // Src matches are relative to this path 
          src: ['**/*.{png,jpg,JPG,gif}'],   // Actual patterns to match 
          dest: 'public/images/'                  // Destination path prefix 
        }]
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['uglify', 'less', 'cssmin']);

};