/** @jsx React.DOM */

"use strict"

var React = require('react');

/**
 *  React component BarryTest
 *
 *  usage: JSX  <BarryTest name="Barry Staes"/>
 */
module.exports = React.createClass({
    render: function() {
        return (
            <div>Hello {this.props.name}</div>
        );
    }
});