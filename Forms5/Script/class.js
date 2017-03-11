var StoreRep = (function () {

    function StoreRep(local) {
        // private properties
        
        // accessor methods

        this.createItem = function (key, value) {
            if (local) {
                return my.localStore.createItem(key, value);
            } else {
               return my.sessionStore.createItem(key, value);
            }
        }

        this.readItem = function (key) {
            if (local) {
                return my.localStore.readItem(key);
            } else {
                return my.sessionStore.readItem(key);
            }
        }

        this.updateItem = function (key, value) {
            if (local) {
                return my.localStore.updateItem(key, value);
            } else {
                return my.sessionStore.updateItem(key, value);
            }
        }

        this.deleteItem = function(key) {
            if (local) {
                return my.localStore.deleteItem(key);
            } else {
                return my.sessionStore.deleteItem(key);
            }
        }

        this.getAllKeys = function () {
            if (local) {
                return my.localStore.getAllKeys();
            } else {
                return my.sessionStore.getAllKeys();
            }
        }

        this.clear = function () {
            if (local) {
                return my.localStore.clearAll();
            } else {
                return my.sessionStore.clearAll();
            }
        }


    }
    // instance methods
  

    return StoreRep;

})();