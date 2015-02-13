/** @jsx React.DOM */

"use strict"

var React = require('react');

/**
 *  React component OpenRaGame
 *
 *  Usage:
 *    <OpenRaGame game={game} />
 */
module.exports = React.createClass({
    render: function() {
        var game = this.props.game;
        return(
            <li>
                <h2>{game.name}</h2>
                <p>Players: {game.players} - {game.maxplayers}</p>
                <p>Spectators: {game.spectators}, Bots: {game.bots}</p>
                <p>Address: {game.address}</p>
            </li>
        ); // key={game.id}
    }

});