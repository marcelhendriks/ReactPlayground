"use strict"

module.exports = {
    entry: "./source/scripts/main.js",
        watch: true,
        keepalive: true,
        devtool: "#inline-source-map", // Here we get our sourcemap for debugging in Chrome.
        output: {
        filename: 'appbundle.js',
            path: './build'
    },
    module: {
        // "the loaders will be applied from right to left" ?!
        loaders: [
            // This loader transforms our JSX content to JS
            {test: /\.jsx?$/, loader: 'jsx'},
            // This loader transforms our SASS styles to CSS in JS
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    }
}