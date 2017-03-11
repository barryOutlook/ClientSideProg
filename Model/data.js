(function () {
    // window.my existis use it otherwise create it
    window.my = window.my || {};
})();
///
/// This provides a data model for the application
///
my.Data = (function () {

    var shop = {
        shopId: 0,
        name: "",
        lat: 0.000000,
        lng: 0.000000
    };

    var shops = [
        {
            shopId: 1,
            name: "argos",
            lat: 54.577095,
            lng: -1.240860

        },
        {
            shopId: 2,
            name: "b&m",
            lat: 54.577596,
            lng: -1.235675

        },
        {
            shopId: 3,
            name: "iaasc wilson",
            lat: 54.578060,
            lng: -1.237137

        },
        {
            shopId: 4,
            name: "grainger games",
            lat: 54.575472,
            lng: -1.238092

        },
        {
            shopId: 5,
            name: "mima",
            lat: 54.574595,
            lng: -1.232787
        }
    ];

    function GetShops() {
        return shops;
    };
    
    function GetByShopId(shopId) {
        for (var i = 0; i < shops.length; i++) {
            if (shops[i].shopId == shopId) {
                
                return shops[i];
            }
        }
    };

    return {
        getShops: GetShops,
        getShopById :GetByShopId
    };

})();

