var MyLocation = (function () {

    function Get() {
        return  getLocation();
    }

    function getLocation() {
        if (navigator.geolocation) {
                return navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        } else {
            return null;
        }
    }

    function geoSuccess(position) {
        var current = {}
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        current.lat = lat;
        current.lng = lng;
        return current;
        //alert("lat:" + lat + " lng:" + lng);
    }

    function geoError() {
        
    }

    return {
        get: Get

    };

})();





function getLocation() {
    if(navigator.geolocation ){
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function geoSuccess(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    alert("lat:" + lat + " lng:" + lng);
}

function geoError() {
    alert("Geocoder failed.");
}