module.exports = function(grunt) {
	'use strict';

	var config = {
		dist: {
			options: {
				branch: ''
			}
		}
	};

	grunt.config('gitrebase', config);
}