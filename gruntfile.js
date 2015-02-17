module.exports = function(grunt) {

    var webpack = require('webpack');

    // The loader transforms our JSX content
    var module = {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'jsx'
        }]
    };

    grunt.initConfig({
        webpack: {
            buildname: {
                entry: "./source/scripts/main.js",
                watch: true,
                keepalive: true,
                devtool: "#inline-source-map", // Here we get our sourcemap
                output: {
                    filename: 'appbundle.js',
                    path: './build'
                },
                module: module
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['webpack:buildname']);
}