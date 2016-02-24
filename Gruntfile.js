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
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/button.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab.js',
                    //'bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix.js',

                    // ...or set common bootstrap.js file with all components.
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',

                    // project JS files
                    'assets/scripts/*.js'
                ],
                dest: 'dist/js/scripts.min.js' // 'destination'
            }
        },

        // Concatenate files
        concat: {
            options: {
                sourceMap: true,
                separator: ';'
            },
            dist: {
                src: [
                    // common bootstrap.js file with all components
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                    // project JS files
                    'assets/scripts/*.js'
                ],
                dest: 'dist/js/scripts.js' // 'destination'
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

        // Minify PNG, JPEG and GIF images
        imagemin: {
            dynamic: {
                files: [{
                    expand: true, // enable dynamic expansion
                    cwd: 'assets/images/', // src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/' // destination path prefix
                }]
            }
        },

        // Include content from other files
        includes: {
            files: {
                src: 'assets/*.html', // source files
                dest: 'dist', // destination directory
                flatten: true,
                cwd: '.',
                options: {
                    includePath: 'assets/include', // source folder
                    silent: true
                }
            }
        },

        // Run predefined tasks whenever watched file patterns are added, changed or deleted
        watch: {
            options: {
                livereload: true
            },
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
            },
            img: {
                files: [
                    'assets/images/**/*'
                ],
                tasks: ['imagemin']
            }
        }
    });

    //  Minify files with UglifyJS
    // [https://github.com/gruntjs/grunt-contrib-uglify]
    grunt.loadNpmTasks('grunt-contrib-uglify'); // requires Grunt >=0.4.0

    // Concatenate files
    // [https://github.com/gruntjs/grunt-contrib-concat]
    grunt.loadNpmTasks('grunt-contrib-concat'); // requires Grunt >=0.4.0

    // Run tasks whenever watched files change
    // [https://github.com/gruntjs/grunt-contrib-watch]
    grunt.loadNpmTasks('grunt-contrib-watch'); // requires Grunt >=0.4.0

    // Validate files with JSHint
    // [https://github.com/gruntjs/grunt-contrib-jshint]
    grunt.loadNpmTasks('grunt-contrib-jshint'); // requires Grunt >=0.4.0

    // Compile Sass to CSS
    // [https://github.com/gruntjs/grunt-contrib-sass]
    grunt.loadNpmTasks('grunt-contrib-sass'); // requires Grunt >=0.4.0

    // Minify PNG, JPEG and GIF images
    // [https://github.com/gruntjs/grunt-contrib-imagemin]
    grunt.loadNpmTasks('grunt-contrib-imagemin'); // requires Grunt >=0.4.0

    // Include content from other files (think php includes)
    // [https://github.com/vanetix/grunt-includes]
    grunt.loadNpmTasks('grunt-includes'); // requires Grunt >=0.4.0


    grunt.registerTask('default', ['jshint', 'uglify', 'sass:prod', 'imagemin', 'includes']);

    // phase of development (no minification, adding source map)
    // need to change the name of the CSS and JS files in the HTML
    grunt.registerTask('dev', ['jshint', 'concat', 'sass:develop', 'imagemin', 'includes']);
};
