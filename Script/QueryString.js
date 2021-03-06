﻿(function () {
    // window.my existis use it otherwise create it
    window.my = window.my || {};
})();

my.QueryString = (function () {

    function getValue(variable) {
        var qs = getQueryStrings();
        return qs[variable];
    }

    function getQueryStrings() {
        var assoc = {};
        var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
        var queryString = location.search.substring(1);
        var keyValues = queryString.split('&');

        for (var i in keyValues) {
            var key = keyValues[i].split('=');
            if (key.length > 1) {
                assoc[decode(key[0])] = decode(key[1]);
            }
        }

        return assoc;
    };

    return {
        getAll: getQueryStrings,
        getValue: getValue,
    };

})();