var fs = require('fs');

module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('grunt');

	grunt.registerTask('default', ['jshint', 'clean', 'coffee', 'sass', 'uglify', 'requirejs', 'cssmin', 'copy', 'htmlbuild:dist', 'connect']);
	grunt.registerTask('pre-build', ['jshint', 'karma', 'clean', 'coffee', 'sass']);
	grunt.registerTask('compress', ['uglify', 'requirejs', 'cssmin']);
	grunt.registerTask('build:dev', ['pre-build', 'compress', 'copy', 'htmlbuild:dev', 'connect']);
	grunt.registerTask('build:dist', ['pre-build', 'compress', 'htmlbuild:dist', 'git', 'connect']);
	grunt.registerTask('git', ['gitadd', 'gitcommit', 'get_branchname', 'gitcheckout', 'gitrebase']);
}