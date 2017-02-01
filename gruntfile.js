var fs = require('fs');

module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		running: {
			taskOwner: 'Juan',
			src: 'js/somefile.js',
			dest: 'somefile.js'
		},
		multi: {
			config1: {
				message: 'This is config1'
			},
			config2: {
				message: 'This is config2'
			}
		}
	});

	grunt.registerTask('running', 'An example task', function(arg1) {
		var done = this.async();
		grunt.config.requires('running.taskOwner');
		grunt.log.writeln('grunt running...' + this.name, grunt.config.get('running.taskOwner'));
		grunt.log.writeln(grunt.config.get('running.src'));

		fs.readFile(grunt.config.get('running.src'), function(error, data) {
			fs.writeFile(grunt.config.get('running.dest'), data);
			done();
		});
	});

	grunt.registerMultiTask('multi', 'An example multi task', function() {
		grunt.log.writeln(this.data.message);
	});

	grunt.registerTask('run', 'Run all the tasks', ['running']);
}