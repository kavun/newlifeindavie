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

!(function () {
	var $menu = $('.dropdown'),
		$menulink = $('.menu-link');

	$menulink.click(function() {
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
		return false;
	});

	var toggled = 0;

	$('.menu-link').click(function() {
		if (toggled === 0) {
			$('.bar3').stop().transition({
				rotate: "45",
				"margin-top": "13px"
			});
			$('.bar2').stop().transition({
				opacity: "0"
			}, "fast");
			$('.bar1').stop().transition({
				rotate: "-45",
				"margin-top": "13px"
			});
			toggled++;
		} else {
			$('.bar3').stop().transition({
				rotate: "+=135",
				"margin-top": "3px"
			});
			$('.bar2').transition({
				opacity: "1"
			}, "fast");
			$('.bar1').stop().transition({
				rotate: "-=135",
				"margin-top": "23px"
			});
			toggled--;
		}
	});
})();