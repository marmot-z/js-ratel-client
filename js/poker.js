;(function (window) {
    'use strict';

    function Level(level, symbol, aliases) {
        this.level = level;
        this.symbol = symbol;
        this.aliases = Array.from(Array.prototype.slice.call(arguments, 2));
    }

    Level.prototype.is = function(alias) {
        var arr = this.aliases.filter(a => a == alias);
        return arr != null && arr.length > 0;
    };

    function Type(type, symbol) {
        this.type = type;
        this.symbol = symbol;
    }

    var POKER = {
        LEVELS: {
            LEVEL_3: new Level(3, "3", "3"),
            LEVEL_4: new Level(4, "4", "4"),
            LEVEL_5: new Level(5, "5", "5"),
            LEVEL_6: new Level(6, "6", "6"),
            LEVEL_7: new Level(7, "7", "7"),
            LEVEL_8: new Level(8, "8", "8"),
            LEVEL_9: new Level(9, "9", "9"),
            LEVEL_10: new Level(10, "10", "0", "T", "t"),
            LEVEL_J: new Level(11, "J", "J", "j"),
            LEVEL_Q: new Level(12, "Q", "Q", "q"),
            LEVEL_K: new Level(13, "K", "K", "k"),
            LEVEL_A: new Level(14, "A", "1", "A", "a"),
            LEVEL_2: new Level(15, "2", "2"),
            LEVEL_SMALL_KING: new Level(16, "S", "S", "s"),
            LEVEL_BIG_KING: new Level(17, "X", "X", "x")
        },
        TYPES: {
            BLANK: new Type("BLANK", "_"),
            DIAMOND: new Type("DIAMOND", "_"),
            CLUB: new Type("CLUB", "_"),
            SPADE: new Type("SPADE", "_"),
            HEART: new Type("HEART", "_")
        },
        levelContains: (alias) => {
            for (var a in POKER.LEVELS) {
                if (POKER.LEVELS[a].is(alias)) return true;
            }

            return false;
        }
    };

    window.POKER = POKER;
} (this));