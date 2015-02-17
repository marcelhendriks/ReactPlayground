"use strict"

module.exports = {
    entry: "./source/scripts/main.js",
        watch: true,
        keepalive: true,
        devtool: "#inline-source-map", // Here we get our sourcemap
        output: {
        filename: 'appbundle.js',
            path: './build'
    },
    module: {
        // The loader transforms our JSX content
        loaders: [{
            test: /\.jsx?$/,
            loader: 'jsx'
        }]
    }
}