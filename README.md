# grunt-pixrem

> Generate pixel fallbacks for rem units with [Grunt](http://gruntjs.com/).

## Getting Started

This plugin requires [Grunt](http://gruntjs.com/) `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide which explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process you may install this plugin with the command:

```shell
npm install grunt-pixrem --save-dev
```

After the plugin has been installed, load it in your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-pixrem');
```

## pixrem task

_Run this task with the `grunt pixrem` command._

<!-- This task helps you compile your Jekyll static site with Grunt.js. -->

### Options

<!-- Going to have to use file obj. -->

<!-- You can use all of the configuration options available in the [Jekyll Documentation](http://jekyllrb.com/docs/configuration/), as well as some special options provided by this plugin.
 -->
<!-- #### src

Type: `string`
Default: `.`

Directory where Jekyll will read files.

#### dest

Type: `string`
Default: `./_site`

Directory where Jekyll will write files.
 -->

## Usage examples

### Example config
<!-- 
```js
grunt.initConfig({
  jekyll: {                   			// Task
  	options: {							// Universal options
        bundleExec: true,
        src : '<%= app %>'
  	},
    dist: { 	                		// Target
      options: {	           			// Target options
    	dest: '<%= dist %>',
		config: '_config.yml,_config.build.yml'
      }
    },
    serve: {                   			// Another target
      options: {
        dest: '.jekyll',
        drafts: true
      }
    }
  }
});

grunt.loadNpmTasks('grunt-jekyll');

grunt.registerTask('default', ['jshint', 'jekyll']);
```
 -->
### Example usage

#### XXXX
<!-- 
```js
grunt.initConfig({
  jekyll: {
    dist: {
      options: {
        config: '_config.yml'.
        // Construct a string with JavaScript.
        // Remember, in YAML line breaks and indentation matter.
		raw: 'pygments: false\n' +
			 'exclude: [\'development\']\n' +
			 'author:\n' +
             '  name: ' + fetchAuthor() + '\n' +
             '  email: ' + fetchEmail()
        }
    }
  }
});
```
 -->

## Contribute

Report bugs and feature proposals in the [Github issue tracker](https://github.com/robwierzbowski/grunt-pixrem/issues). Run tests with Grunt. In lieu of a formal styleguide, take care to maintain the existing coding style. 

## Release History

0.1.0, XXXX: Initial release.  

## License

[BSD-NEW](http://en.wikipedia.org/wiki/BSD_License)
