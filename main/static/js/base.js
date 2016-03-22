// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
$(document).ready(function()
{
	$("#pac-input").hide();
	
	$('#listview').hide();
	$('.list').click(function(){
		$('#map').hide();
		$('#listview').fadeIn('fast');
	});

	$('.map').click(function(){
		$('#map').show();
		$('#listview').fadeOut('fast');
	});

	//	$('.list').hover(function () {
	//	});

	$('.complex').click(function () {
		// console.log('test');
		$(this).find(".listing").fadeIn('fast');
	})

	$('#div_id_address').hide();
	$('#div_id_city').hide();
	$('#div_id_state').hide();
	$('#div_id_apartment_complex').click(function(){
		$('#div_id_address').toggle(this.checked);
		$('#div_id_city').toggle(this.checked);
		$('#div_id_state').toggle(this.checked);
		$('#div_id_complex_name').toggle(this.checked);
	});
});

	


$('#id_upload_image').change(function()
{
			if ($(this).files && $(this).files[0]) 
			{
				var reader = new FileReader();

				reader.onload = function (e) 
				{
					$('#id_upload_image')
						.attr('src', e.target.result)
						.width(150)
						.height(200);
				};

				reader.readAsDataURL($(this).files[0]);
			}
});









function initMap() 
{
	var map = new google.maps.Map(document.getElementById('map'), 
	{

			center: {lat: 40.2573138, lng: -111.7089457},
		 
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	 // Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() 
	{
		searchBox.setBounds(map.getBounds());
	});

	$.get("http://localhost:8000/housing_api", function(data, status)
	{
		
		for (var x=0;x < data.length; x++) 
		{

			google.maps.event.addDomListener(window, 'load', addMarkers(data, x, map, markers))
		}
	});//close get housing_api

	map.addListener("click",function(event)
	{
		console.log(event)
	})
}
var markers = {};
function hideMarkers(id, markers)
{
	var marker = markers[id]
	marker.setVisible(false);
}
function showMarkers(id, markers)
{
	var marker = markers[id]
	marker.setVisible(true);
}


function addMarkers(data, x, map, markers) 
{
	latitude = data[x].fields.latitude
	longitude = data[x].fields.longitude
	var point = {lat: latitude, lng: longitude}	
	console.log(point)
	console.log(x)


	if (data[x].model == 'main.complexname') 
	{
		var complex_name = data[x].fields.name
		var marker = new google.maps.Marker
		({
				map: map, 
				position: point,
				url: 'http://localhost:8000/single_complex/'+data[x].pk,
				title:data[x].fields.name,
				zIndex: 10

		}); 
		markers[data[x].fields.name] = marker;
	} 
	else 
	{
		var marker = new google.maps.Marker
		({
				icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
				map: map,
				position: point,
				url: 'http://localhost:8000/listing/'+data[x].pk,
				title:data[x].fields.name,
				zIndex: 10
		}); 	
				markers[data[x].fields.name] = marker;
	}


	google.maps.event.addListener(marker, 'click', function() 
	{
		console.log(marker.title)
		hideMarkers(marker.title, markers)


		// window.location.href = marker.url;
	});
}; //end addMarkers()




