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
          paths: ["assets/styles"]
        },
        files: {
          "public/styles/dist.css": "assets/styles/imports.less"
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
        src: ['assets/js/master.js'],
        dest: 'public/js/dist.js',
      }
    },


    watch: {
      scripts: {
        files: ['assets/js/**/*'],
        tasks: ['browserify', 'uglify']
      },
      styles: {
        files: ['assets/styles/**/*'],
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
