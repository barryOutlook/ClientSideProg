(function () {
    // window.my existis use it otherwise create it
    window.my = window.my || {};
})();

(function (google) {
    // window.my existis use it otherwise create it
    // instanciate services
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
})(google);