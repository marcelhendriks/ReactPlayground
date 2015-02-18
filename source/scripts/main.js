/** @jsx React.DOM */

"use strict"

// Styles from SASS files to CSS, embedded in JS.
require('../styles/main.scss');

var React = require('react');
var App = require('./react/app.jsx');

React.render(
    <App />,
    document.getElementById('content')
);