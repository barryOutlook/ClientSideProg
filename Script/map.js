
var getYourCoordinates = function getCoordinates(coordinates) {
    var lat = coordinates.latitude;
    var lng = coordinates.longitude;
    alert(lat);
    alert(lng);
};

my.location.getLocation(getYourCoordinates);

var shopId = my.QueryString.getValue("shopId");
var shop = my.data.getShopById(shopId);
function initMap() {
    var myLatLng = { lat: shop.lat, lng: shop.long };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: shop.name
    });
}


