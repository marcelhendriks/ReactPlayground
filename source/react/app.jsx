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
 * 2015-02-12 Barry: Replaced browserify with webpack, in preparation for live reloading and css bundling.
 */

"use strict"

var React = require('react');
var BarryTest = require('./components/BarryTest.jsx');
var OpenRaGames = require('./components/OpenRaGames.jsx');

// Fix facilitate React tab in Chrome inspection
window.React = React;

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <BarryTest name="Barry with webpack" />
                <OpenRaGames source="http://master.openra.net/games_json" />
            </div>
        );
    }
});