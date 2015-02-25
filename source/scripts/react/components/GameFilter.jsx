/** @jsx React.DOM */

"use strict"

var React = require('react');

var GameFilter = React.createClass({

    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value,
            this.refs.showAllGames.getDOMNode().checked
        );
    },

    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search…"
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
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