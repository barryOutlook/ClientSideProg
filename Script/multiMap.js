

// 54.569373, -1.237296

function initMap() {
	

    var locations = [];
    var aLocation = {};
    var sLocation = {};

    /// get shop
    var shopId = my.QueryString.getValue("shopId");
    var shop = my.data.getShopById(shopId);
    sLocation.shopId = shop.shopId;
    sLocation.name = shop.name;
    sLocation.lat = shop.lat;
    sLocation.lng = shop.long;
    locations.push(sLocation);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(54.569373, -1.237296),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
            origin: { lat: locations[0].lat, lng: locations[0].lng },
            destination: { lat: locations[1].lat, lng: locations[1].lng },
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }


    var getYourCoordinates = function getCoordinates(coordinates) {
            var lat = coordinates.latitude;
            var lng = coordinates.longitude;
            aLocation.shopId = 0;
            aLocation.name = "Your Current Loacation";
            aLocation.lat = lat;
            aLocation.lng = lng;
            locations.push(aLocation);
            var pos = {
                lat: aLocation.lat,
                lng: aLocation.lng
            };
            map.setCenter(pos);
            drawMap();
        };

        my.location.getLocation(getYourCoordinates);


        function drawMap() {
            var infowindow = new google.maps.InfoWindow({});

            var marker, i;
            var latlngbounds = new google.maps.LatLngBounds();
            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                    map: map
                });

                var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());


                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                    return function() {
                        infowindow.setContent(locations[i].name);
                        infowindow.open(map, marker);
                    }
                })(marker, i));

                latlngbounds.extend(marker.position);


            }


            var bounds = new google.maps.LatLngBounds();

            //Center map and adjust Zoom based on the position of all markers.

            map.setCenter(latlngbounds.getCenter());
            map.fitBounds(latlngbounds);
            calculateAndDisplayRoute(directionsService, directionsDisplay);
            directionsDisplay.setMap(map);

        };
    }




