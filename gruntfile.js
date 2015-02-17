"use strict"

module.exports = function(grunt) {

    grunt.initConfig({
        webpack: {
            buildname: require("./webpack.config.js")
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['webpack:buildname']);
}