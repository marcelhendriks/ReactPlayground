/** @jsx React.DOM */

"use strict"

var React = require('react');
var OpenRaGame = require('./OpenRaGame.jsx');

/**
 *  React component OpenRaGames
 *
 *  Usage:
 *    <OpenRaGames source="http://master.openra.net/games_json" />
 */
module.exports = React.createClass({
    getInitialState: function() {
        return {
            games: null
        };
    },

    loadGamesFromServer: function() {
        $.ajax({
            url: this.props.source,
            dataType: 'json',
            success: function(data) {
                this.setState({games: data});
                console.log('games load ok');
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.source, status, err.toString());
            }.bind(this)
        });
        console.log('games load start');
    },

    componentDidMount: function() {
        this.loadGamesFromServer();
        setInterval(this.loadGamesFromServer, this.props.pollInterval);
    },
    
    render: function() {
        if (!this.state.games) {
            return <div>Loading...</div>
        } else {
            var gamesList = this.state.games.map(function (game) {
                return <OpenRaGame game={game} />
            });
            return <ul>{gamesList}</ul>
        }
    }

});