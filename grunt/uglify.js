module.exports = function(grunt) {
	'use strict';

	var config = {
		dist: {
			files: {
				'dist/js/package.min.js': 'dist/js/**/*.js'
			}
		},
		options: {
			sourceMap: true,
			sourceMapIn: 'dist/js/package.js.map'
		}
	};

	grunt.config('uglify', config);
}