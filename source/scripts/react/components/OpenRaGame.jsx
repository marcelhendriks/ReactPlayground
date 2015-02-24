/** @jsx React.DOM */

"use strict"

var React = require('react');
var m = require('./../inlinestyling.js');

// Constants
var OpenRa = Object.freeze({
    // Values used at http://master.openra.net/games_json
    JSON : {
        // Game state id
        GAME_WAITING : 1,
        GAME_PLAYING : 2,
        // Game mod name
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
 *
 *  See /test/games.json for game properties.
 */
module.exports = React.createClass({
    render: function() {
        var game = this.props.game;

        // Intermediate vars
        var modver = game.mods.split('@');
        var modText = 'Mod unknown ('+game.mods+')';
        if (modver[0] in OpenRa.JSON.MODS) {
            modText = OpenRa.JSON.MODS[modver[0]];
        }
        var gameAvailable = (game.state==OpenRa.JSON.GAME_WAITING);

        // Inline styles > CSS
        var styles = {
            container: {
                'background-color' : 'yellow'
            },
            unavailable: {
                'background-color' : '#0082C6',
                color: 'darkgray'
            }
        };

        // Content JSX > HTML
        return(
            <tr style={m(
                styles.container,
                !gameAvailable && styles.unavailable
            )}>
                <td><p>{game.name}</p><small>{game.address}</small></td>
                <td><p>{(game.state==OpenRa.JSON.GAME_PLAYING) ? 'Playing' : 'Waiting'}</p><small>{game.players} players</small></td>
                <td><p>{modText}</p><small>..</small></td>
                <td><p>..</p><small>..</small></td>
            </tr>
        );
    }

});