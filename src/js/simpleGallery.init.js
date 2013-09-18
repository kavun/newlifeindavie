;(function ($, Galleria, undefined) {
	var SET_ID = '72157635501029042';
	var flickr = new Galleria.Flickr();
	var elem = $('.galleria-gallery');
	var loader = $('<div>', { id: 'loader' }).appendTo('#gallery');

	flickr.setOptions({
		max: 200,
		description: true
	});

	loader.text('Loading ' + $(this).text()).show();

	flickr.set(SET_ID, function (data) {
		loader.fadeOut('fast');

		if (elem.data('galleria')) {
			elem.data('galleria').load(data);
		} else {
			elem.galleria({
				dataSource: data,
				extend: function() {
					$('.fullscreen').click(this.proxy(function (e) {
						e.preventDefault();
						this.enterFullscreen();
					}));
				}
			});
		}
	});

})(jQuery, Galleria);