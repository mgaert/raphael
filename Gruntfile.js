/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner : '// ┌────────────────────────────────────────────────────────────────────┐ \\\\ \n'+
             '// │ <%= pkg.title || pkg.name %> <%= pkg.version %> - JavaScript Vector Library                          │ \\\\ \n'+
             '// ├────────────────────────────────────────────────────────────────────┤ \\\\ \n'+
             '// │ Copyright © 2008-<%= grunt.template.today("yyyy") %> Dmitry Baranovskiy (http://raphaeljs.com)    │ \\\\ \n'+
             '// │ Copyright © 2008-<%= grunt.template.today("yyyy") %> Sencha Labs (http://sencha.com)              │ \\\\ \n'+
             //'// │ Copyright © <%= grunt.template.today("yyyy") %> Michael Gärtner                                   │ \\\\ \n'+
             '// ├────────────────────────────────────────────────────────────────────┤ \\\\ \n'+
             '// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\\\ \n'+
             '// └────────────────────────────────────────────────────────────────────┘ \\\\ \n',
    // Task configuration.
    clean: {
      files: ['bin']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/eve.js','src/<%= pkg.name %>.core.js','src/<%= pkg.name %>.svg.js','src/<%= pkg.name %>.vml.js'],
        dest: 'bin/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'bin/<%= pkg.name %>-min.js'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: false,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
        }
      },
      lib_test: {
        src: ['src/*.js']
      }
    },
    watch: {
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('default', ['clean','jshint','concat', 'uglify']);
  grunt.registerTask('minifi', ['clean','concat', 'uglify']);
  
};
