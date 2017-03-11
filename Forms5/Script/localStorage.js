(function () {
    // window.my exists use it otherwise create it
    window.my = window.my || {};
})();

///
/// This provides a data access layer for the application
///
my.localStore = (function () {

    function createItem(key, value) {
        if (window.localStorage && !localStorage.getItem(key)) {
            localStorage.setItem(key,JSON.stringify(value));
            return true;
        } else {
            return false;
        }
    }

    function readItem(key) {
        if (window.localStorage && localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return null;
        }
    }

    function updateItem(key, value) {
        if (window.localStorage && localStorage.getItem(key)) {
            localStorage.removeItem(key);
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } else {
            return false;
        }
    }

    function deleteItem(key) {
        if (window.localStorage && localStorage.getItem(key)) {
            localStorage.removeItem(key);
            return true;
        } else {
            return false;
        }
    }

    function getAllKeys() {
        var keys = [];
        if (window.localStorage.length > 0) {

            for (var i = 0; i < localStorage.length; i++) {
                keys[i] = localStorage.key(i);
            }
        }
        return keys;
    }

    function clearAll() {
        if (window.localStorage) {
            localStorage.clear();
            return true;
        } else { return false}
    }


    return {
        createItem: createItem,
        readItem: readItem,
        updateItem: updateItem,
        deleteItem: deleteItem,
        getAllKeys: getAllKeys,
        clearAll: clearAll
    };

})();


