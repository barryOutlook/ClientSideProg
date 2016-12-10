
var shopId = QueryString.getValue("shopId");
var shop = Mydata.getShopById(shopId);
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
