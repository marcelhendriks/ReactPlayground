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
 * 2015-02-18 Barry: Added webpack SASS loaders for CSS. Based on http://stackoverflow.com/a/26876311/2096041
 * 2015-02-25 Barry: Demo showi ng live OpenRA json, props for filtering, minor React tweaks.
 *                   Based on http://www.openra.net/games/
 */

"use strict"

var React = require('react');
var BarryTest = require('./components/BarryTest.jsx');
var FilterableGames = require('./components/FilterableGames.jsx');

// Debug clientside: facilitate React tab in Chrome inspection
if (typeof window !== undefined) {
    window.React = React;
}

var App = React.createClass({
    render: function() {
        return (
            <div>
                <BarryTest name="Barry test 123" />
                <FilterableGames />
            </div>
        );
    }
});

module.exports = App;