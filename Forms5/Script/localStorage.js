(function () {
    // window.my existis use it otherwise create it
    window.my = window.my || {};
})();
///
/// This provides a data model for the application
///
my.localStore = (function () {



    function addItem(key, value) {
        if (window.localStorage && !localStorage.getItem(key)) {
            localStorage.setItem(key,JSON.stringify(value));
            return true;
        } else {
            return false;
        }
    }

    function readItemByKey(key, value) {
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

    function deleteItem(key, value) {
        if (window.localStorage && localStorage.getItem(key)) {
            localStorage.removeItem(key);
            return true;
        } else {
            return false;
        }
    }


    return {
        getShops: GetShops,
        getShopById: GetByShopId
    };

})();
