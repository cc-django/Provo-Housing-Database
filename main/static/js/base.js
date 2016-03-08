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

	


 $('#id_upload_image').change(function(){
			if ($(this).files && $(this).files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('#id_upload_image')
						.attr('src', e.target.result)
						.width(150)
						.height(200);
				};

				reader.readAsDataURL($(this).files[0]);
			}
		})
$("#search").keyup(function () {
	var searchTerm = $("#search").val();
	var addresses = $("#listings").find(".address");

	$.extend($.expr[':'], {
		'containsi': function (elem, i, match, array) {
			return (elem.textContent || elem.innerText || '').toLowerCase()
				.indexOf((match[3] || "").toLowerCase()) >= 0;
		}
	});

	var searchSplit = searchTerm.replace(/ /g, "'):containsi('");

	$("#listings .address").not(":containsi('" + searchSplit + "')").each(function (e) {
		$(this).parent().parent().addClass('hidden');
		
//			console.log($(this).parent());
	});

	$("#listings .address:containsi('" + searchSplit + "')").each(function (e) {
		$(this).parent().parent().removeClass('hidden');
	});
});


function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {

		center: {
			lat: 40.2573138,
			lng: -111.7089457
		},

		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	var geocoder = new google.maps.Geocoder();
	$.get("http://127.0.0.1:8000/housing_api", function (data, status) {
		var x;
		for (x = 0; x < data.length; x++) {


			geocoder = new google.maps.Geocoder();
			function codeAddress(data, x) {
				console.log('-----------------')
				if (data[x].model == 'main.complexname') {
					var address = data[x].fields.address
				} else {
					var address = data[x].fields.address + ' ' + data[x].fields.city + ', ' + data[x].fields.state
				}

				console.log('addy:' + address)
				console.log('geo  ' + geocoder)
				location.LatLng
				geocoder.geocode({
					'address': address
				}, function (results, status) {
					latitude = results[0].geometry.location.lat()
					longitude = results[0].geometry.location.lng()

					console.log("x= " + x)
					if (status == google.maps.GeocoderStatus.OK) {
						console.log("data[x].model: " + data[x].model)
						if (data[x].model == 'main.complexname') {

							var myLatlng = new google.maps.LatLng(data[x].fields.latitude, data[x].fields.longitude);
							map.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
								icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
								map: map,
								position: myLatlng,
								url: 'http://127.0.0.1:8000/complex/' + data[x].pk,
								title: data[x].fields.name

							}); //var marker
							google.maps.event.addListener(marker, 'click', function () {
								window.location.href = marker.url;
							});
							console.log("green marker complex: " + x)

						} else if (data[x].model == 'main.listing') {
							map.setCenter(results[0].geometry.location);
							var marker = new google.maps.Marker({
								map: map,
								position: results[0].geometry.location,
								url: 'http://127.0.0.1:8000/listing/' + data[x].pk,
							}); //var marker
							console.log("red marker elif: " + x)
							google.maps.event.addListener(marker, 'click', function () {
								window.location.href = marker.url;
							});
						}
					} else {
						alert("Geocode was not successful for the following reason: " + status + address);
						console.log('alert')
					}
					console.log('^^^^^^^^^^^^^^^^')
				});

			}
			codeAddress(data, x)
		}
	}); //close get housing_api

};









