module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    precision: 2
                },
                files: [{
                    expand: true,
                    cwd: 'app/scss',
                    src: ['*.scss'],
                    dest: 'app/css',
                    ext: '.css'

                }]
            }
        },
        watch: {
            sass: {
                files: ['app/scss/*.scss'], // which files to watch
                tasks: ['sass']
            },
            autoprefixer: {
                files: ['app/css/project.css'],
                tasks: ['autoprefixer']
            }
        },
        autoprefixer: {
            options: {
                // Configured supported browser versions
                browsers: ['last 2 versions', 'ie 9']
            },
            dev: {
                expand: true,
                flatten: true,
                src: 'app/css/project.css',
                dest: 'app/css/'
            }
        },
        spglue: {
            default: {
                options: {
                    source: 'app/images/_sprite',
                    output: 'app/scss',
                    img: 'app/images',
                    scss: true,
                    scssTemplate: 'sprites_scss_template.jinja',
                    ratios: '1',
                    algorithm: 'square',
                    namespace: 'kredito',
                    spriteNamespace: 'sprite',
                    crop: true,
                    padding: 1
                },
                files: {
                    'app/scss': 'app/images/_sprite'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sprite-glue');
    grunt.loadNpmTasks('grunt-contrib-watch');
};