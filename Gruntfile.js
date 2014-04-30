var path = require('path');

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-bower-task');

	grunt.initConfig({
	  bower: {
	    install: {
	      options: {
	        cleanBowerDir: true,
		  layout: 'byType',
		  targetDir: 'dist/',
					verbose: true
	      }
	    }
	  }
	});

}
