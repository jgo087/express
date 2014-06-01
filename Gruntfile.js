module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    nodemon: {
      dev: {
        script: 'bin/www'
      }
    },


    less: {
      dev: {
        options: {
          paths: ["api/assets/styles"]
        },
        files: {
          "public/styles/dist.css": "api/assets/styles/imports.less"
        }
      },
    },


    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dev: {
        files: {
          'public/js/dist.min.js': ['public/js/dist.js']
        }
      }
    },


    browserify: {
      dev: {
        src: ['api/assets/js/master.js'],
        dest: 'public/js/dist.js',
      }
    },


    watch: {
      scripts: {
        files: ['api/assets/js/**/*'],
        tasks: ['browserify', 'uglify']
      },
      styles: {
        files: ['api/assets/styles/**/*'],
        tasks: ['less']
      },
    },



    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watcher: ['nodemon', 'watch']
    },


  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['concurrent:watcher']);

};
