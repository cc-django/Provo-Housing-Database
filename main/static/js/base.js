
// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
$(document).ready(function(){
	$('#listview').hide();
  $('.list').click(function(){
    $('#map').hide();
    $('#listview').fadeIn('fast');
  });

  $('.map').click(function(){
    $('#map').show();
    $('#listview').fadeOut('fast');
  });

  $('.list').hover(function(){
    $
  });

  $('.complex').click(function(){
  	$(this).next().fadeIn('fast');
  })

});


$(document).ready(function(){
	$('#div_id_address').hide();
		$('#div_id_city').hide();
		$('#div_id_state').hide();
	$('#div_id_apartment_complex').click(function(){
		$('#div_id_address').toggle(this.checked);
		$('#div_id_city').toggle(this.checked);
		$('#div_id_state').toggle(this.checked);
		$('#div_id_complex_name').toggle(this.checked);
	}) 

});



	function initMap() {
	 var map = new google.maps.Map(document.getElementById('map'), {
	   center: {lat: 40.2573138, lng: -111.7089457},
	   
	   zoom: 13,
	   mapTypeId: google.maps.MapTypeId.ROADMAP
	 });

	 // Create the search box and link it to the UI element.
	 var input = document.getElementById('pac-input');
	 var searchBox = new google.maps.places.SearchBox(input);
	 map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	 // Bias the SearchBox results towards current map's viewport.
	 map.addListener('bounds_changed', function() {
	   searchBox.setBounds(map.getBounds());
	 });

	 var markers = [];
	 // [START region_getplaces]
	 // Listen for the event fired when the user selects a prediction and retrieve
	 // more details for that place.
	 searchBox.addListener('places_changed', function() {
	   var places = searchBox.getPlaces();

	   if (places.length == 0) {
	     return;
	   }

	   // Clear out the old markers.
	   markers.forEach(function(marker) {
	     marker.setMap(null);
	   });
	   markers = [];

	   // For each place, get the icon, name and location.
	   var bounds = new google.maps.LatLngBounds();
	   places.forEach(function(place) {
	     var icon = {
	       url: place.icon,
	       size: new google.maps.Size(71, 71),
	       origin: new google.maps.Point(0, 0),
	       anchor: new google.maps.Point(17, 34),
	       scaledSize: new google.maps.Size(25, 25)
	     };

	     // Create a marker for each place.
	     markers.push(new google.maps.Marker({
	       map: map,
	       icon: icon,
	       title: place.name,
	       position: place.geometry.location
	     }));

	     if (place.geometry.viewport) {
	       // Only geocodes have viewport.
	       bounds.union(place.geometry.viewport);
	     } else {
	       bounds.extend(place.geometry.location);
	     }
	   });
	   map.fitBounds(bounds);
	 });
	 // [END region_getplaces]
	}




