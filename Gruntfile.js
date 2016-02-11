'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Validate JavaScript files with JSHint
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'assets/scripts/*.js']
        },

        //  Minify javascript files with UglifyJS
        uglify: {
            options: {
                sourceMap: false,
                sourceMapName: 'dist/js/scripts.min.js.map'
            },
            build: {
                src: [ // 'source'
                    // you can choose only the components that you need to reduce the size of destination file...
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/button.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
                    //'vendor/bootstrap-sass/assets/javascripts/bootstrap/affix.js',

                    // ...or set common bootstrap.js file with all components.
                    'vendor/bootstrap-sass/assets/javascripts/bootstrap.js',

                    // project JS files
                    'assets/scripts/*.js'
                ],
                dest: 'dist/js/scripts.min.js' // 'destination'
            }
        },

        // Compile Sass to CSS
        sass: {
            develop: {
                options: {},
                files: {
                    'dist/css/styles.css': 'assets/styles/main.scss' // 'destination': 'source'
                }
            },
            prod: {
                options: {
                    style: 'compressed', // can be: nested, compact, compressed, expanded
                    sourcemap: 'none' // can be: auto, file, inline, none
                },
                files: {
                    'dist/css/styles.min.css': 'assets/styles/main.scss' // 'destination': 'source'
                }
            }
        },

        // Run predefined tasks whenever watched file patterns are added, changed or deleted
        watch: {
            js: {
                files: [
                    'Gruntfile.js',
                    'assets/scripts/*.js'
                ],
                tasks: ['jshint', 'uglify']
            },
            css: {
                files: [
                    'assets/styles/**/*.scss'
                ],
                tasks: ['sass:prod']
            }
        }
    });

    //  Minify files with UglifyJS
    // [https://github.com/gruntjs/grunt-contrib-uglify]
    grunt.loadNpmTasks('grunt-contrib-uglify'); // requires Grunt >=0.4.0

    // Run tasks whenever watched files change
    // [https://github.com/gruntjs/grunt-contrib-watch]
    grunt.loadNpmTasks('grunt-contrib-watch'); // requires Grunt >=0.4.0

    // Validate files with JSHint
    // [https://github.com/gruntjs/grunt-contrib-jshint]
    grunt.loadNpmTasks('grunt-contrib-jshint'); // requires Grunt >=0.4.0

    // Compile Sass to CSS
    // [https://github.com/gruntjs/grunt-contrib-sass]
    grunt.loadNpmTasks('grunt-contrib-sass'); // requires Grunt >=0.4.0

    grunt.registerTask('default', ['jshint', 'uglify', 'sass:prod']);
};
