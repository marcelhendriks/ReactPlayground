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

        // Style when release does not have a recent version
        var release_tag = "release-20141029";
        var playtest_tag = "playtest-20150118";
        var recentRelease = !((modver[1] != release_tag) && (modver[1] != playtest_tag));

        var modRelease = modver[1];
        var gameAvailable = (game.state==OpenRa.JSON.GAME_WAITING);
        var playerNames = ('clients' in game) ? game.clients.join(', ') : '';

        // Inline styles > CSS
        var styles = {
            container: {
                'color': '#0A0'
            },
            unavailable: {
                'color': '#F80'
            },
            outofdate: {
                'color': '#999'
            }
        };

        // Content JSX > HTML
        return(
            <tr style={m(
                !recentRelease && styles.outofdate
            )}>
                <td>{game.name}<small>{game.address}</small></td>
                <td><span style={m(
                    styles.container,
                    !gameAvailable && styles.unavailable
                )}>{(game.state==OpenRa.JSON.GAME_PLAYING) ? 'Playing' : 'Waiting'}</span><small title={playerNames}>{game.players} players</small></td>
                <td>{modText}<small>{modRelease}</small></td>
                <td>todo<small>..</small></td>
            </tr>
        );
    }

});

module.exports = OpenRaGame;