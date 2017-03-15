function createCookie(cname, cvalue, exdays) {
    if (cookiesEnabled()) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        return true;
    } else { return false }
}

function readCookie(cname) { //Take the cookiename as parameter (cname).
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie); //Decode the cookie string, to handle cookies with special characters, e.g. '$'
    var ca = decodedCookie.split(';'); //Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).
    //Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) { //If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updateCookie(cname, cvalue, exdays) {
    if (checkCookie(cname)) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        return true;
    } else { return false }
}

function deleteCookie(cname) {
    if (checkCookie(name)) {
        var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = cname + "=" + "" + ";" + expires + ";path=/";
        return true;
    }
    else
    {
        return false;
    }
}

function checkCookie(name) {
    var cookie = readCookie(name);
    if (cookie != "") {
        return true;
    } else {
        return false;
        }
}

function getAllCookies() {

    var cookies = {};

    if (document.cookie && document.cookie != '') {
        var split = document.cookie.split(';');
        for (var i = 0; i < split.length; i++) {
            var name_value = split[i].split("=");
            //  line removes leading space from the cookie name which will be present for the second and subsequent cookies
            name_value[0] = name_value[0].replace(/^ /, '');
            cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
        }
    }

    return cookies;

}

function cookiesEnabled() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
}