module.exports = function(grunt) {
	'use strict';

	var config = {
		server: {
			options: {
				base: './dist/',
				keepalive: true,
				open: true
			}
		}
	};

	grunt.config('connect', config);
}