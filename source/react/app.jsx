/** @jsx React.DOM */
/**
 * Usage:
 * To install run 'npm install'
 * To build run 'grunt'
 *
 * Changelog:
 * 2015-02-05 Barry: Created minimal working React test.
 * 2015-02-09 Barry: Added buildchain to facilitate JSX transform and require().
 *                   Based on https://github.com/simonsmith/react-commonjs-example/
 *
 */

"use strict"

var React = require('react');
var BarryTest = require('./components/BarryTest.jsx');

// Fix facilitate React tab in Chrome inspection
window.React = React;

React.render(
    <BarryTest name="Barry" />,
    document.getElementById('content')
);