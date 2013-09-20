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
			jsMain: {
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
			jsGallery: {
				src: [
					'bower_components/jquery/jquery.js',
					'bower_components/jquery-galleria/src/galleria.js',
					'bower_components/jquery-galleria/src/plugins/flickr/galleria.flickr.js',
					'src/js/gallery.init.js'
				],
				dest: 'dist/<%= pkg.name %>.gallery.js'
			},
			jsSimpleGallery: {
				src: [
					'bower_components/jquery/jquery.js',
					'bower_components/jquery-galleria/src/galleria.js',
					'bower_components/jquery-galleria/src/plugins/flickr/galleria.flickr.js',
					'bower_components/jquery-galleria/src/themes/classic/galleria.classic.js',
					'src/js/simpleGallery.init.js'
				],
				dest: 'dist/<%= pkg.name %>.simpleGallery.js'
			},
			cssIndex: {
				src: ['bower_components/pure/build/pure.css'],
				dest: 'dist/index.css'
			},
			cssMain: {
				src: [
					'bower_components/pure/build/pure.css',
					'src/css/main.css',
					'src/css/dropdown.css'
				],
				dest: 'dist/<%= pkg.name %>.css'
			},
			cssGallery: {
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
			uglifyMain: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.jsMain.dest %>']
				}
			},
			uglifyGallery: {
				files: {
					'dist/<%= pkg.name %>.gallery.min.js': ['<%= concat.jsGallery.dest %>']
				}
			},
			uglifySimpleGallery: {
				files: {
					'dist/<%= pkg.name %>.simpleGallery.min.js': ['<%= concat.jsSimpleGallery.dest %>']
				}
			}
		},

		jshint: {
			// define the files to lint
			files: ['gruntfile.js', 'src/js/*.js'],
			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				globals: {
					nl: true,
					Galleria: true,
					google: true
				},
				node: true,
				browser: true,
				esnext: false,
				es3: true,
				jquery: true,
				quotmark: false,
				smarttabs: true,
				trailing: true,
				undef: true,
				unused: true,
				eqnull: true,
				validthis: true,
				immed: true,
				expr: true,
				curly: true,
				camelcase: true
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