/** @jsx React.DOM */

"use strict"

var React = require('react');

// Constants
var OpenRa = Object.freeze({
    // Values used at http://master.openra.net/games_json
    JSON : {
        // Game state
        GAME_WAITING : 1,
        GAME_PLAYING : 2,
        // Game mod
        MODS : {
            "ra": "Red Alert",
            "cnc": "Tiberian Dawn",
            "d2k": "Dune 2000",
            // Third party mods:
            "fgtn": "The Forgotten Chapter",
            "to": "RA: Tiberium Origins"
        }
    }
});

/**
 *  React component OpenRaGame
 *
 *  Usage:
 *    <OpenRaGame game={game} />
 */
module.exports = React.createClass({
    render: function() {
        var game = this.props.game;

        var modver = game.mods.split('@');
        var modText;
        if (modver[0] in OpenRa.JSON.MODS) {
            modText = OpenRa.JSON.MODS[modver[0]];
        } else {
            modText = 'Mod unknown ('+game.mods+')';
        }

        return(
            <li>
                <h2>{game.name}</h2>
                <p>State: {(game.state==OpenRa.JSON.GAME_PLAYING) ? "Playing" : "Waiting"}</p>
                <p>Mod: {modText}</p>
                <p>Players: {game.players} - {game.maxplayers}</p>
                <p>Spectators: {game.spectators}, Bots: {game.bots}</p>
                <p>Address: {game.address}</p>
                <p>Location: {game.location}</p>
            </li>
        );
    }

});