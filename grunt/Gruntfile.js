module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            source: {
                files: ['../components/js/amplify.js', '../server/public/js/controllers/app.js', '../server/index.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../components/sass/*.scss'],
                tasks: ['compass:dev']
            },
            uglify: {
                files : ['../components/js/amplify.js'],
                tasks: ['uglify:my_target']
            },
            html: {
                files: ['../*.html']
            }
        },
        jshint: {
            files: ['Gruntfile.js', '../components/js/amplify.js', '../server/public/js/controllers/app.js', '../server/index.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        compass: {
            dev: {                    // Another target
                options: {
                    config: 'config.rb'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    '../server/public/js/amplify.min.js': ['../components/js/amplify.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch', 'compass', 'uglify']);

};
