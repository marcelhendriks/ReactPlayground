/** @jsx React.DOM */

"use strict"

var React = require('react');
var GameFilter = require('./GameFilter.jsx');
var OpenRaGames = require('./OpenRaGames.jsx');

var FilterableGames = React.createClass({
    getInitialState: function() {
        return {
            filterText: '',
            showAllGames: false
        };
    },
    handleUserInput: function(filterText, showAllGames) {
        this.setState({
            filterText: filterText,
            showAllGames: showAllGames
        });
    },
    render: function() {
        return (
            <div>
                <h1>Server Browser</h1>
                <GameFilter
                    filterText={this.state.filterText}
                    showAllGames={this.state.showAllGames}
                    onUserInput={this.handleUserInput}
                />
                <OpenRaGames
                    source="http://master.openra.net/games_json"
                    pollInterval={2000}
                    filterText={this.state.filterText}
                    showAllGames={this.state.showAllGames}
                />
            </div>
        );
    }
});

module.exports = FilterableGames;