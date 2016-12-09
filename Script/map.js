var queryString = window.location.search;
queryString = queryString.substring(1);
var shop = Mydata.getShopById(queryString);
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
