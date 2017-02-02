module.exports = function(grunt) {
	'use strict';

	var config = {
		dist: {
			src: 'index.html',
			dest: 'dist/index.html',
			options: {
				prefix: '',
				relative: true,
				scripts: {
					'package': ['dist/js/package.min.js', 'dist/js/app.js']
				},
				styles: {
					css: 'dist/css/styles.min.css'
				}
			}
		},
		dev: {
			src: 'index.html',
			dest: 'dist/index.html',
			options: {
				prefix: '',
				relative: true,
				scripts: {
					'package': 'dist/js/package.js'
				},
				styles: {
					css: 'dist/css/styles.css'
				}
			}
		}
	};

	grunt.config('htmlbuild', config);
}