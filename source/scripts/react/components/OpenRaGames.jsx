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
            var activePlayers = 0;
            var activeServers = 0;

            // React child components > array
            var gamesList = this.state.games.map(function (game) {
                // While at it, count totals.
                activePlayers += parseInt(game['players']);
                if ((game.players>0) && (game.state!=3)) activeServers++;

                return <OpenRaGame game={game} key={game.id} />
            });

            return(
                <div>
                    <h1>Server Browser</h1>
                    <p>{activePlayers} players active in {activeServers} advertized servers.</p>
                    <table>
                        <thead><tr><th>Server</th><th>Status</th><th>Mod</th><th>Map</th></tr></thead>
                        <tbody>{gamesList}</tbody>
                    </table>
                </div>
            );
        }
    }

});