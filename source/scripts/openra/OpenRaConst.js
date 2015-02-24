"use strict"

// Constants
var OpenRa = Object.freeze({
    // Values used at http://master.openra.net/games_json
    JSON : {
        // Game state id
        GAME_WAITING : 1,
        GAME_PLAYING : 2,
        GAME_FINISHED: 3,
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

module.exports = OpenRa;