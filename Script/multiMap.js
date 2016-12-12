

function initMap() {
	
    /// get shop id
    var shopId = my.QueryString.getValue("shopId");
    // get shop from data
    var shop = my.Data.getShopById(shopId);
    // add this shop to the collection
    var sLocation = new my.GeoLocation.Location(shop.shopId, shop.name, shop.lat, shop.lng);
    my.GeoLocation.Locations.push(sLocation);
    
    // instanciate services
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    // initialise the map
    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(54.569373, -1.237296),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });



    // get current coordinates when location has been calculated by my.location.getLocation
    var getYourCoordinates = function getCoordinates(coordinates) {         
        var aLocation = new my.GeoLocation.Location(0, "Your Current Location", coordinates.latitude, coordinates.longitude);
        my.GeoLocation.Locations.push(aLocation);
            drawMap();
            var distance = getDistance();
    };

    my.GeoLocation.getLocation(getYourCoordinates);

        // draws the markers on the map
        function drawMap() {
            var infowindow = new google.maps.InfoWindow({});
            var marker, i;
            var latlngbounds = new google.maps.LatLngBounds();
            for (i = 0; i < my.GeoLocation.Locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(my.GeoLocation.Locations[i].lat, my.GeoLocation.Locations[i].lng),
                    map: map
                });
                var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(my.GeoLocation.Locations[i].name);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
                latlngbounds.extend(marker.position);
            }
            var bounds = new google.maps.LatLngBounds();

            //Center map and adjust Zoom based on the position of all markers.

            map.setCenter(latlngbounds.getCenter());
            map.fitBounds(latlngbounds);
            calculateAndDisplayRoute(directionsService, directionsDisplay, my.GeoLocation.Locations);
            directionsDisplay.setMap(map);

            
        };

        // Calculate Route
        function calculateAndDisplayRoute(directionsService, directionsDisplay, locs) {
            directionsService.route({
                origin: { lat: locs[0].lat, lng: locs[0].lng },
                destination: { lat: locs[1].lat, lng: locs[1].lng },
                travelMode: 'WALKING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }

       // gets the distance
        function getDistance() {
            var startp = new google.maps.LatLng(my.GeoLocation.Locations[0].lat, my.GeoLocation.Locations[0].lng);
            var endp = new google.maps.LatLng(my.GeoLocation.Locations[1].lat, my.GeoLocation.Locations[1].lng);
            var d = google.maps.geometry.spherical.computeDistanceBetween(startp, endp);
            return d;

        }

     
}

window.onload = document.getElementById("btn1").addEventListener("click", initMap);




