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
var OpenRaGames = React.createClass({

    propTypes: {
        source:       React.PropTypes.string,
        pollInterval: React.PropTypes.number,
        filterText:   React.PropTypes.string,
        showAllGames: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            pollInterval: 0,
            filterText: '',
            showAllGames: false
        };
    },

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
                //console.log('games load ok');
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.source, status, err.toString());
            }.bind(this)
        });
        //console.log('games load start');
    },

    componentDidMount: function() {
        this.loadGamesFromServer();
        if (this.props.pollInterval > 0) {
            setInterval(this.loadGamesFromServer, this.props.pollInterval);
        }
    },
    
    render: function() {
        if (!this.state.games) {
            return <div>Loading...</div>
        } else {
            var filterActiveOnly = function(game) { return ((game.players > 0) && (game.state != OpenRa.JSON.GAME_FINISHED)); }
            var filterText = function(game) {
                return (game.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) > -1);
            }.bind(this);

            // Collect stats
            var games = this.state.games.filter(filterActiveOnly);
            var activeServers = games.length;
            var activePlayers = games.map(function(game) { return parseInt(game.players); }).reduce(function(a,b) { return a+b; }, 0);
            // ^ Using the common map-reduce pattern. Traditional code for this integer sum would be:
            // var activePlayers = 0; for(var i=0; i<games.length; ++i) { activePlayers = activePlayers + parseInt(games[i].players); }
            // ^ While we're at it, the same code in coffeescript would be: (i think..)
            // activePlayers = games
            //     .map (game) -> parseInt(game.players)
            //     .reduce (a,b) -> a+b

            // Show all games?
            if (this.props.showAllGames)     { games = this.state.games; }
            if (this.props.filterText != '') { games = games.filter(filterText); }

            // Create JSX rows
            var rows = [];
            games.forEach(function(game) {
                rows.push(<OpenRaGame game={game} key={game.id} />);
            });
            if (rows.length===0) {
                rows.push(<tr key={-1}><td colSpan='4'>Nothing to display.</td></tr>);
            }

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

module.exports = OpenRaGames;