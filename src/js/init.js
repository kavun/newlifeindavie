nl.headerDropDown = new nl.Dropdown().init();

nl.roundy = $('.roundy').removeClass('invisible').roundabout({
	autoplay: true,
	autoplayDuration: 3000,
	autoplayPauseOnHover: true,
	responsive: true
});

!(function() {
	var myOptions = {
		center: new google.maps.LatLng(26.075, -80.269722),
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		panControl: false,
		mapTypeControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		scaleControl: false
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	new google.maps.Geocoder().geocode({
		'address': 'Silver Ridge Elementary School'
	}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		}
	});
})();