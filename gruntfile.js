module.exports = function(grunt) {

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: '\n'
			},
			js: {
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
			css: {
				src: [
					'bower_components/pure/build/pure.css',
					'src/css/main.css',
					'src/css/dropdown.css'
				],
				dest: 'dist/<%= pkg.name %>.css'
			}
		},

		uglify: {
			options: {
			// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			my_target: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
				}
			}
		},

		cssmin: {
			options: {
				report: 'gzip'
			},

			files: {
				expand: true,
				cwd: 'dist/',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/',
				ext: '.min.css'
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

	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);

};