(function($, Galleria, undefined) {

	$('.add-set').on('click', function (e) {
		e.preventDefault();
		$('.galleria-menu').find('ul').eq(0).append('<li><span class="icon camera"></span><a href="' + $('.add-url').val() + '">Test Set</a></li>');
		$('.add-url').val('');
	});

	// load the theme
	Galleria.loadTheme('../bower_components/jquery-galleria/src/themes/classic/galleria.classic.js');

	// create a flickr instance
	var flickr = new Galleria.Flickr();

	// cache the gallery
	var elem = $('.galleria-gallery');

	// create and append the loader growl
	var loader = $('<div>', {
		id: 'loader'
	}).appendTo('#gallery');

	// a local var used later
	var set;

	// set flickr to fetch description and increase the photo limit
	flickr.setOptions({
		max: 200,
		description: true
	});

	// attach event handler for the menu
	$('.galleria-menu').on('click', 'a', function(e) {

		e.preventDefault();

		if ($(this).closest('li').hasClass('fullscreen')) {
			return;
		}

		// toggle active class
		$(this).closest('li').addClass('active').siblings('.active').removeClass('active');

		// extract the set id from the link href
		set = this.href.split('/');
		set = set[set.length - 2];

		// add loader text and show
		loader.text('Loading ' + $(this).text()).show();

		// load the set
		flickr.set(set, function(data) {

			// hide the loader
			loader.fadeOut('fast');

			// check if galleria has been initialized
			if (elem.data('galleria')) {

				// load galleria with the new data
				elem.data('galleria').load(data);

				// else initialize galleria (1st time)
			} else {
				elem.galleria({

					// add the data as dataSource
					dataSource: data,

					// add a custom fullscreen button
					extend: function() {
						$('.fullscreen').click(this.proxy(function(e) {
							e.preventDefault();

							// call the enterFullscreen() method from the galleria API
							this.enterFullscreen();
						}));
					}
				});
			}
		});
	});

	// trigger a click onload so that the first gallery will be displayed when entering
	$('.galleria-menu a').eq(0).click();
})(jQuery, Galleria);