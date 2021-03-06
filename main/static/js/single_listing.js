$(document).ready(function(){

	$("#distanceSliderBYU").on("input change", function(){
		houseFilter()
	});
	
	$("#search").keyup(function(){
		houseFilter()
	});
	
	$("#distanceSliderUVU").on("input change", function(){
		houseFilter()
	});
	
	$("#priceRange").on("input change", function(){
		houseFilter()
	});
	
	$("#roommates").on("input change", function(){
		houseFilter()
	});
	
//---------------------------------------housing gender type below
	$("#male").click(function(){
		houseFilter()
	});
	
	$("#female").click(function(){
		houseFilter()
	});
	
	$("#other").click(function(){
		houseFilter()
	});
	
//---------------------------------------room type below
	$("#private").click(function(){
		houseFilter()
	});
	
	$("#shared").click(function(){
		houseFilter()
	});
	
	$("#married").click(function(){
		houseFilter()
	});
	
//---------------------------------------contract type below
	$("#fall-winter").click(function(){
		houseFilter()
	});
	
	$("#full-year").click(function(){
		houseFilter()
	});
	
	$("#winter-summer").click(function(){
		houseFilter()
	});
	
	$("#summer-Fall").click(function(){
		houseFilter()
	});
	
	$("#fall").click(function(){
		houseFilter()
	});
	
	$("#summer").click(function(){
		houseFilter()
	});
	
	$("#winter").click(function(){
		houseFilter()
	});
	
	$("#no-contract").click(function(){
		houseFilter()
	});
	
	$("#contract-other").click(function(){
		houseFilter()
	});
	
//---------------------------------------furnished type below
	$("#furnished").click(function(){
		houseFilter()
	});
	
	$("#partial-furnished").click(function(){
		houseFilter()
	});
	
	$("#not-furnished").click(function(){
		houseFilter()
	});
	
//---------------------------------------furnished type below
	$("#apartment").click(function(){
		houseFilter()
	});
	
	$("#house-type").click(function(){
		houseFilter()
	});
	
//------------------------------------------Available date type below
	$("#available-date").on("input change", function(){
		houseFilter()
	});
	
//	function parseDate(input) {
//		var parts = input.match(/(\d+)/g);
//		return new Date(parts[0], parts[1]-1, parts[2]);
//	};

	function houseFilter(){

		var searchTerm = $("#search").val();
		var distanceSliderBYU = $("#distanceSliderBYU").val();
		var distanceSliderUVU = $("#distanceSliderUVU").val();
		var priceRange = $("#priceRange").val();
		var roommates = $("#roommates").val();
		var genderChoice = ""
		if ($("#male:checked").length > 0){
			genderChoice = 'M'
		} else if ($("#female:checked").length > 0){
			genderChoice = 'F'
		} else if ($("#other:checked").length > 0){
			genderChoice = 'Other'
		}
		var roomTypeChoice = ""
		if ($("#private:checked").length > 0){
			roomTypeChoice = 'Private'
		} else if ($("#shared:checked").length > 0){
			roomTypeChoice = 'Shared'
		} else if ($("#married:checked").length > 0){
			roomTypeChoice = 'Married'
		}
		var contractLengthChoice = ""
		if ($("#fall-winter:checked").length > 0){
			contractLengthChoice = 'Fall/Winter'
		} else if ($("#full-year:checked").length > 0){
			contractLengthChoice = 'Full Year'
		} else if ($("#winter-summer:checked").length > 0){
			contractLengthChoice = 'Winter/Summer'
		} else if ($("#summer-Fall:checked").length > 0){
			contractLengthChoice = 'Summer/Fall'
		} else if ($("#fall:checked").length > 0){
			contractLengthChoice = 'Fall'
		} else if ($("#summer:checked").length > 0){
			contractLengthChoice = 'Summer'
		} else if ($("#winter:checked").length > 0){
			contractLengthChoice = 'Winter'
		} else if ($("#no-contract:checked").length > 0){
			contractLengthChoice = 'No_Contract'
		} else if ($("#contract-other:checked").length > 0){
			contractLengthChoice = 'Other'
		}
		var furnishingChoice = ""
		if ($("#furnished:checked").length > 0){
			furnishingChoice = 'Furnished'
		} else if ($("#partial-furnished:checked").length > 0){
			furnishingChoice = 'Partial Furnished'
		} else if ($("#not-furnished:checked").length > 0){
			furnishingChoice = 'Unfurnished'
		}
		var buildingTypeChoice = ""
		if ($("#apartment:checked").length > 0){
			buildingTypeChoice = 'Apt'
		} else if ($("#house-type:checked").length > 0){
			buildingTypeChoice = 'House'
		}
//		var availableDateChoice = $("#available-date").val();
//		if (availableDateChoice == ""){
//			availableDateChoice =  new Date();
//		} else {
//		availableDateChoice = parseDate(availableDateChoice)
//		}
//		availableDateChoice = availableDateChoice.getTime();

		var houseListing = $(".house-listing");

		
		houseListing.each(function(i){
			var distanceBYU = $(this)[0].dataset.distancebyu
			var listingName = $(this)[0].dataset.name
			var distanceUVU = $(this)[0].dataset.distanceuvu
			var listingPrice = $(this)[0].dataset.pricerange
			var roomMates = $(this)[0].dataset.roommates
			var gender = $(this)[0].dataset.gender
			var roomType = $(this)[0].dataset.roomtype
			var contractLength = $(this)[0].dataset.contractlength
			var furnishingType = $(this)[0].dataset.furnishingtype
			var buildingType = $(this)[0].dataset.buildingtype
//			var availableDate = $(this)[0].dataset.availabledate
//			availableDate = parseDate(availableDate)
//			availableDate = availableDate.getTime();

			if ((Number(distanceBYU) < Number(distanceSliderBYU))
				&& (listingName.toLowerCase().indexOf(searchTerm.toLowerCase())>-1)
				&& (Number(distanceUVU) < Number(distanceSliderUVU))
				&& (Number(listingPrice) < Number(priceRange))
				&& (Number(roomMates) < Number(roommates))
				&& (gender === genderChoice || genderChoice === "")
				&& (roomType === roomTypeChoice || roomTypeChoice === "")
				&& (contractLength === contractLengthChoice || contractLengthChoice === "")
				&& (furnishingType === furnishingChoice || furnishingChoice === "")
				&& (buildingType === buildingTypeChoice || buildingTypeChoice === "")
//				&& (Number(availableDate) <= Number(availableDateChoice))
				){
				$(this).show()
				showMarkers(listingName, window.markers)
				$(this).parent().parent().show()
			} else {
				$(this).hide()
				hideMarkers(listingName, window.markers)
			
			}
		});
		
	};

});
