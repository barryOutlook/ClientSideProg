(function () {
    // window.my exists use it otherwise create it
    window.my = window.my || {};
})();

my.sessionStore = (function () {

    function createItem(key, value) {
        if (window.sessionStorage && !sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        } else {
            return false;
        }
    }

    function readItem(key) {
        if (window.sessionStorage && sessionStorage.getItem(key)) {
            return JSON.parse(sessionStorage.getItem(key));
        } else {
            return null;
        }
    }

    function updateItem(key, value) {
        if (window.sessionStorage && sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);
            sessionStorage.setItem(key, JSON.stringify(value));
            return true;
        } else {
            return false;
        }
    }

    function deleteItem(key) {
        if (window.sessionStorage && sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);
            return true;
        } else {
            return false;
        }
    }


    return {
        createItem: createItem,
        readItem: readItem,
        updateItem: updateItem,
        deleteItem: deleteItem
    };

})();
