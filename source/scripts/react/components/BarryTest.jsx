/** @jsx React.DOM */

"use strict"

var React = require('react');

/**
 *  React component BarryTest
 *
 *  usage: JSX  <BarryTest name="Barry Staes"/>
 */
var BarryTest = React.createClass({
    render: function() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
});

module.exports = BarryTest;