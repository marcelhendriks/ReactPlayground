/** @jsx React.DOM */

"use strict"

var React = require('react');

var GameFilter = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.showAllGames.getDOMNode().checked
        );
    },
    render: function() {
        return (
            <form>
                <label>
                    <input
                        type="checkbox"
                        checked={this.props.showAllGames}
                        ref="showAllGames"
                        onChange={this.handleChange}
                    />
                    Show all games
                </label>
            </form>
        );
    }
});

module.exports = GameFilter;