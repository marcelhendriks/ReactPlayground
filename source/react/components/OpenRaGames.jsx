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
            var gamesList = this.state.games.map(function (game) {
                return(
                    <OpenRaGame game={game} />
                );
            });
            return (
                <ul>
                    {gamesList}
                </ul>
            );
        }
    }

});