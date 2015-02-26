/** @jsx React.DOM */

"use strict"

var React = require('react');
var m = require('./../inlinestyling.js');
var OpenRa = require('./../../openra/OpenRaConst.js');

/**
 *  React component OpenRaGame
 *
 *  Usage:
 *    <OpenRaGame game={game} />
 *
 *  See /test/games.json for game properties.
 */
var OpenRaGame = React.createClass({

    render: function() {
        var game = this.props.game;

        // Intermediate vars
        var modver = game.mods.split('@');
        var modText = 'Mod unknown ('+game.mods+')';
        if (modver[0] in OpenRa.JSON.MODS) { modText = OpenRa.JSON.MODS[modver[0]]; }
        var modRelease = modver[1];
        var gameAvailable = (game.state==OpenRa.JSON.GAME_WAITING);
        var playerNames = ('clients' in game) ? game.clients.join(', ') : '';

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
                <td><p>{(game.state==OpenRa.JSON.GAME_PLAYING) ? 'Playing' : 'Waiting'}</p><small title={playerNames}>{game.players} players</small></td>
                <td><p>{modText}</p><small>{modRelease}</small></td>
                <td><p>todo</p><small>..</small></td>
            </tr>
        );
    }

});

module.exports = OpenRaGame;