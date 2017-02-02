module.exports = function(grunt) {
	'use strict';

	var config = {
		dist: {
			options: {
				message: grunt.option('commit-message')
			}
		}
	};

	grunt.config('gitcommit', config);
}