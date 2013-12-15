/*
 * grunt-pixrem
 * https://github.com/robwierzbowski/grunt-pixrem
 *
 * Copyright (c) 2013 Rob Wierzbowski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var fs = require('fs');
	var pixrem = require('pixrem');

	grunt.registerMultiTask('pixrem', 'Generate pixel fallbacks for rem units.', function () {

		var done = this.async();
    var options = this.options({
      rootvalue: 16,
      replace: false
    });

    // Here below is straight up grunt uglify.
    this.files.forEach(function (file) {
      var output;
      var src = file.src.filter(function (filepath) {
        // Remove invalid source files
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        else {
          return true;
        }
      });

      if (src.length === 0) {
        grunt.log.warn('skipped ' + file.dest + ' because src files were empty.');
        return;
      }

      try {
        output = pixrem(src, options.rootvalue, { replace: options.replace });
      }
      catch (e) {
        var err = new Error('Pixrem failed.');
        console.log(e);

        if (e.message) {
          err.message += '\n' + e.message + '. \n';
        }

        err.origError = e;
        grunt.fail.warn(err);
      }

       // Write the destination file.
      grunt.file.write(file.dest, output);

       // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });

    done(true);
	});
};
