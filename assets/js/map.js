//code to show street view was retrieved here: https://developers.google.com/maps/documentation/javascript/examples/streetview-simple
//Code to create map and draw marker was retrieved from here: https://developers.google.com/maps/documentation/javascript/examples/marker-simple
function getMap()
{
    var getMapURL = "https://maps.googleapis.com/maps/api/js?callback=initMap"
    var lat = 35.819585;
    var lng = -78.906046;
    
    function initMap() 
    {
        var myLatLng = {lat: lat, lng: lng};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
        
        var panorama = new google.maps.StreetViewPanorama(
			document.getElementById('pano'), {
			  position: {lat: 35.819585, lng: -78.906046},
			  pov: {
				heading: 5,
				pitch: 7
			  }
			});
		map.setStreetView(panorama);
      }

    
    $.ajax({
        url: getMapURL,
        dataType: 'json', 
        error: function(xhr, status, error) { console.log(error.message); },
        success: initMap(lat,lng)
    });
    
}

$(function() {
	getMap();
});
