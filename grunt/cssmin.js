module.exports = function(grunt) {
	'use strict';

	var config = {
		dist: {
			files: {
				'dist/css/styles.min.css': 'dist/css/**/*.css'
			}
		},
		options: {
			sourceMap: true
		}
	};

	grunt.config('cssmin', config);
}