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

function getAllKeys() {
    var keys = [];
    if (window.sessionStorage.length > 0) {

        for (var i = 0; i < sessionStorage.length; i++) {
            keys[i] = sessionStorage.key(i);
        }
    }
    return keys;
}

function clearAll() {
    if (window.sessionStorage) {
        sessionStorage.clear();
        return true;
    } else { return false }
}