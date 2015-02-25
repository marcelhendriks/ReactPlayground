/** @jsx React.DOM */

"use strict"

var React = require('react');
var GameFilter = require('./GameFilter.jsx');
var OpenRaGames = require('./OpenRaGames.jsx');

var FilterableGames = React.createClass({
    getInitialState: function() {
        return {
            showAllGames: false
        };
    },
    handleUserInput: function(/* filterText, */ showAllGames) {
        this.setState({
            showAllGames: showAllGames
        });
    },
    render: function() {
        return (
            <div>
                <GameFilter
                    showAllGames={this.state.showAllGames}
                    onUserInput={this.handleUserInput}
                />
                <OpenRaGames
                    source="http://master.openra.net/games_json"
                    pollInterval={2000}
                    showAllGames={this.state.showAllGames}
                />
            </div>
        );
    }
});

module.exports = FilterableGames;