module.exports = function(grunt) {
	'use strict';

	var config = {
		dev: {
			files: [
				{
					src: 'node_modules/grunt-contrib-requirejs/tasks/require.js',
					dest: 'dist/js/vendor/require.js'
				}, {
					expand: true,
					src: ['js/**'],
					dest: 'dist'
				}
			]
		}
	};

	grunt.config('copy', config);
}