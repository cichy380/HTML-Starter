'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //  Minify javascript files with UglifyJS
        // [https://github.com/gruntjs/grunt-contrib-uglify]
        uglify: {
            options: {
                sourceMap: false,
                sourceMapName: 'dist/js/scripts.min.js.map'
            },
            build: {
                src: [
                    // You can choose only the components that you need to reduce the size of destination file...
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

                    // Project JS files.
                    'assets/scripts/*.js'
                ],
                dest: 'dist/js/scripts.min.js'
            }
        }
    });

    //  Minify files with UglifyJS
    grunt.loadNpmTasks('grunt-contrib-uglify');
};
