/** @jsx React.DOM */

"use strict"

var React = require('react');
var OpenRaGame = require('./OpenRaGame.jsx');
var OpenRa = require('./../../openra/OpenRaConst.js');

/**
 *  React component OpenRaGames
 *
 *  Usage:
 *    <OpenRaGames source="http://master.openra.net/games_json" />
 */
module.exports = React.createClass({

    /* props:
        source
        pollInterval
        filterText
        showAllGames
    */

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
            var filterActiveOnly = function(game) { return ((game.players > 0) && (game.state != OpenRa.JSON.GAME_FINISHED)); };
            var filterText = function(game) {
                return (game.name.indexOf(this.props.filterText) > -1);
            }.bind(this);

            // Collect stats
            var games = this.state.games.filter(filterActiveOnly);
            var activeServers = games.length;
            var activePlayers = games.map(function(game) { return parseInt(game.players); }).reduce(function(a,b) { return a+b; }, 0);
            // ^ Using the common map-reduce pattern. Traditional code for this integer sum would be:
            // var activePlayers = 0; for(var i=0; i<games.length; ++i) { activePlayers = activePlayers + parseInt(games[i].players); }

            // Show all games?
            if (this.props.showAllGames)     { games = this.state.games };
            if (this.props.filterText != '') { games = games.filter(filterText); }

            // Create JSX rows
            var rows = [];
            games.forEach(function(game) {
                rows.push(<OpenRaGame game={game} key={game.id} />);
            });

            return(
                <div>
                    <p>{activePlayers} players active in {activeServers} advertized servers.</p>
                    <table>
                        <thead><tr><th>Server</th><th>Status</th><th>Mod</th><th>Map</th></tr></thead>
                        <tbody>{rows}</tbody>
                    </table>
                </div>
            );
        }
    }

});