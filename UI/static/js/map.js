function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(0.03, 32.120850),
        zoom:0,
    };
    var map=new google.maps.Map(document.getElementById("map"), mapProp);
    if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(function (position) {
                 initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                 map.setCenter(initialLocation);
             });
         }
     };
    myMap()
