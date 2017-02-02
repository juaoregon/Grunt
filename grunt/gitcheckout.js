module.exports = function(grunt) {
	'use strict';

	var config = {
		dist: {
			options: {
				branch: 'master'
			}
		}
	};

	grunt.config('gitcheckout', config);
}