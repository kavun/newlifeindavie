(function (nl, $, undefined) {

	nl.ns('Dropdown');

	nl.Dropdown = function () {
		this.config = $.extend({}, nl.Dropdown.defaults);
	};

	nl.Dropdown.defaults = {

		/**
		 * sensitivity threshold (must be 1 or higher)
		 * @type {Number}
		 */
		sensitivity: 1,

		/**
		 * milliseconds for onMouseOver polling interval
		 * @type {Number}
		 */
		interval: 100,

		/**
		 * milliseconds delay before onMouseOut
		 * @type {Number}
		 */
		timeout: 100
	};

	nl.Dropdown.prototype = {

		/**
		 * bind evet handlers
		 * @return {nl.Dropdown}
		 */
		init: function () {
			$('ul.dropdown li').hoverIntent($.extend({}, this.config, {
				over: this.open,
				out: this.close
			}));
			$('ul.dropdown li:has(ul)').find('a:first').append('<div class="arrow-down"></div>');
			$('ul.dropdown li ul li:has(ul)').find('a:first').append('<div class="arrow-down"></div>');

			return this;
		},

		/**
		 * open dropdown section
		 */
		open: function () {
			var $item = $(this);
			$item.addClass('hover');
			$item.find('ul:first').css('visibility', 'visible');
		},

		/**
		 * open dropdown section
		 */
		close: function () {
			var $item = $(this);
			$item.removeClass('hover');
			$item.find('ul:first').css('visibility', 'hidden');
		}
	};

})(nl, jQuery);