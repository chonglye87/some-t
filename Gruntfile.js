module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    bower_conf: grunt.file.exists('.bowerrc') ? grunt.file.readJSON('.bowerrc') : { directory : 'bower_components' },

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      src: {
        src: 'js/*.js'
      }
    },

    jscs: {
      options: {
        config: 'js/.jscs.json'
      },
      grunt: {
        options: {
          requireCamelCaseOrUpperCaseIdentifiers: null
        },
        src: 'Gruntfile.js'
      },
      src: {
        src: '<%= jshint.src.src %>'
      }
    },

    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: false
      },
      dist: {
        src: [
          'js/*.js',
          '!js/application.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        preserveComments: 'some'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'less/<%= pkg.name %>.less'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 9',
          'iOS >= 6',
          'Opera >= 16',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>.css'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      src: [
        'dist/css/<%= pkg.name %>.css'
      ]
    },

    cssmin: {
      options: {
        keepSpecialComments: '*',
        noAdvanced: true
      },
      core: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'dist/css/<%= pkg.name %>.css',
            'dist/css/<%= pkg.name %>.min.css',
          ]
        }
      }
    },

    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'dist/css/<%= pkg.name %>.css'
        }
      }
    },

    copy: {
      dist: {
        expand: true,
        src: [
          'fonts/**',
          'img/**'
        ],
        dest: 'dist/'
      },
      distVendorJS: {
        expand: true,
        flatten: true,
        cwd: './bower_components',
        src: [
          'jquery/dist/jquery.min.js',
          'jquery/dist/jquery.min.map',
          'respond/dest/respond.min.js',
          'html5shiv/dist/html5shiv.js',

          'angular/angular.min.js',
          'angular-ui-router/release/angular-ui-router.min.js',
          'angular-masonry/angular-masonry.js',

        ],
        dest: 'dist/js/vendor/'
      },
      distVendorCSS: {
        expand: true,
        flatten: true,
        cwd: '<%= bower_conf.directory %>',
        src: [
          'bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: 'dist/css/vendor/'
      }
    },

    connect: {
      options: {
        port: 9007,
        livereload: 42201,
        hostname: 'localhost',
        base: '.'
      },
      livereload: {
        options: {
          open: true
        }
      }
    },

    watch: {
      less: {
        files: 'less/**/*.less',
        tasks: ['less', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: ['{,*/}*.html']
      }
    }
  });

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);

  // Test task.
  grunt.registerTask('test', ['csslint', 'jshint', 'jscs']);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less', 'autoprefixer', 'usebanner', 'csscomb', 'cssmin']);

  // Copy files to dist.
  grunt.registerTask('dist-copy', ['copy:dist', 'copy:distVendorJS', 'copy:distVendorCSS']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-copy', 'dist-js' ]);

  // Default task.
  grunt.registerTask('default', ['test', 'dist']);

  // Run server, run...
  grunt.registerTask('server', ['less', 'autoprefixer', 'connect:livereload', 'watch']);

};
