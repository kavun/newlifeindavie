module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['dist'],
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: '\n'
			},
			js_main: {
				// the files to concatenate
				src: [
					'bower_components/jquery/jquery.js',
					'bower_components/jquery-hoverIntent/jquery.hoverIntent.js',
					'bower_components/roundabout/jquery.roundabout.js',
					'src/js/main.js',
					'src/js/dropdown.js',
					'src/js/init.js'
				],
				// the location of the resulting JS file
				dest: 'dist/<%= pkg.name %>.js'
			},
			js_gallery: {
				src: [
					'bower_components/jquery/jquery.js',
					'bower_components/jquery-galleria/src/galleria.js',
					'bower_components/jquery-galleria/src/plugins/flickr/galleria.flickr.js',
					'src/js/gallery.init.js'
				],
				dest: 'dist/<%= pkg.name %>.gallery.js'
			},
			css_main: {
				src: [
					'bower_components/pure/build/pure.css',
					'src/css/main.css',
					'src/css/dropdown.css'
				],
				dest: 'dist/<%= pkg.name %>.css'
			},
			css_gallery: {
				src: [
					'bower_components/pure/build/pure.css',
					'src/css/gallery.css'
				],
				dest: 'dist/<%= pkg.name %>.gallery.css'
			}
		},

		uglify: {
			options: {
			// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			my_target: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.js_main.dest %>']
				}
			},
			my_target_2: {
				files: {
					'dist/<%= pkg.name %>.gallery.min.js': ['<%= concat.js_gallery.dest %>']
				}
			}
		},

		cssmin: {
			min_main: {
				options: {
					report: 'gzip'
				},

				files: {
					'dist/<%= pkg.name %>.css': [
						'bower_components/pure/build/pure.css',
						'src/css/main.css',
						'src/css/dropdown.css'
					]
				}
			},
			min_gallery: {
				options: {
					report: 'gzip'
				},

				files: {
					'dist/<%= pkg.name %>.gallery.css': [
						'bower_components/pure/build/pure.css',
						'src/css/gallery.css'
					]
				}
			}
			
		},

		jshint: {
			// define the files to lint
			files: ['gruntfile.js', 'src/js/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				// more options here if you want to override JSHint defaults
				globals: {
					jQuery: true,
					browser: true
				}
			}
		},

		connect: {
			server: {
				options: {
					port: 9001,
					keepalive: true
				}
			}
		},

		watch: {
			files: ['<%= jshint.files %>', 'src/css/*.css'],
			tasks: ['default']
		}

	});

	grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify']);

};