/** @jsx React.DOM */

"use strict"

var React = require('react');

/**
 *  React component OpenRaGames
 *
 *  Usage: in JS do
 *    var games = json parse http://master.openra.net/games_json
 *  and in JSX do
 *    <OpenRaGameList games={games} />
 */
module.exports = React.createClass({
    getInitialState: function() {
        return {
            games: null
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(result) {
            if (this.isMounted()) {
                this.setState({
                    games: JSON.parse(result)
                });
            }
        }.bind(this));
    },
    
    render: function() {
        if (!this.state.games) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {this.state.games.map(function(game) {
                        return (
                            <li key={game.id}>
                                <h2>{game.name}</h2>
                                <p>Players: {game.players} - {game.maxplayers}</p>
                                <p>Spectators: {game.spectators}, Bots: {game.bots}</p>
                                <p>Address: {game.address}</p>
                            </li>
                        );
                    })}
                </ul>
            );
        }
    }

});