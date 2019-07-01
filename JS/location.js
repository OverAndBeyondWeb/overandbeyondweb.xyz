

function initialize() {
var map;
var myLatlng = new google.maps.LatLng(35.219087,-80.811773);


    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(35.219087, -80.811773)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Vapes Etc!"
    });
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);



