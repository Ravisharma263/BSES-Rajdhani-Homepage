function initialize(lag, log, zoom, id) {
	var myLatlng = new google.maps.LatLng(lag, log);
	var myOptions = {
		zoom : zoom,
		center : myLatlng,
		mapTypeControl : true,
		mapTypeControlOptions : {
			style : google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			poistion : google.maps.ControlPosition.TOP_RIGHT,
			mapTypeIds : [ google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.TERRAIN,
					google.maps.MapTypeId.HYBRID,
					google.maps.MapTypeId.SATELLITE ]
		},
		navigationControl : true,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById(id), myOptions);

	google.maps.event.addListener(map, 'click', function() {
		infowindow.close();
	});

}
/* function to create marker  */
function createMarker(latlng, html) {
	var contentString = html;
	var marker = new google.maps.Marker({
		position : latlng,
		map : map,
		zIndex : Math.round(latlng.lat() * -100000) << 5
	});

	/* google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(contentString);
		infowindow.open(map, marker);
	}); */

	var infowindow = new google.maps.InfoWindow({
		size : new google.maps.Size(150, 50)
	});
	infowindow.setContent(contentString);
	infowindow.open(map, marker);

}
function createMap(lag, log, zoom, id, html) {
	var myLatlng = new google.maps.LatLng(lag, log);
	var myOptions = {
		zoom : zoom,
		center : myLatlng,
		mapTypeControl : true,
		mapTypeControlOptions : {
			style : google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			poistion : google.maps.ControlPosition.TOP_RIGHT,
			mapTypeIds : [ google.maps.MapTypeId.ROADMAP,
					google.maps.MapTypeId.TERRAIN,
					google.maps.MapTypeId.HYBRID,
					google.maps.MapTypeId.SATELLITE ]
		},
		navigationControl : true,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	}
	map = new google.maps.Map(document.getElementById(id), myOptions);

	var contentString = html;
	var marker = new google.maps.Marker({
		position : myLatlng,
		map : map,
		zIndex : Math.round(myLatlng.lat() * -100000) << 5
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(contentString);
		infowindow.open(map, marker);
	});

	var infowindow = new google.maps.InfoWindow({
		size : new google.maps.Size(150, 50)
	});
	infowindow.setContent(contentString);
	infowindow.open(map, marker);

}

function renderMap(locationStr,zoom_val, id){
    var lat=0.0,lng=0.0;
    var locations = locationStr.split("~");
    for (var i = 0; i < locations.length; i++) {
    	locations[i] = locations[i].split("\|");
    	locations[i][0] = "'"+locations[i][0]+"'";
		lat=lat+parseFloat(locations[i][1]);
		lng=lng+parseFloat(locations[i][2]);
    } 
    lat = (lat/locations.length);
    lng = (lng/locations.length);
    
    $("#"+id).show();
    
    var map = new google.maps.Map(document.getElementById(id), {
      zoom: zoom_val,
      center: new google.maps.LatLng(lat, lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
	for (i = 0; i < locations.length; i++) {
			marker = new google.maps.Marker({
				position : new google.maps.LatLng(locations[i][1], locations[i][2]),
				map : map
			});

			google.maps.event.addListener(marker, 'click',(function(marker, i) {
						return function() {
							infowindow.setContent(locations[i][0]);
							infowindow.open(map, marker);
						}
					})(marker, i));
		}
};