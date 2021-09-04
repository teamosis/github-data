// Passive event listeners
jQuery.event.special.touchstart = {
	setup: function (_, ns, handle) {
		'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
	setup: function (_, ns, handle) {
		'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  
	setTimeout(() => {
		$('.loader, .button-group').addClass('loaded');
		$('.loader span').html("Let's go.. I'm done 🔥");
		$('.loader .icon').css('transform', 'scale(0)');
		setTimeout(() => {
			$('.loader').fadeOut();
		}, 1500);
	}, 500);
	
	setTimeout(() => {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.element-item',
			layoutMode: 'fitRows',
			transitionDuration: '0s',
			getSortData: {
				forks: '.forks parseInt',
				stars: '.stars parseInt',
				last_commit: function (itemElem) {
					var dateStr = $(itemElem).find('.last_commit').text(),
						dateArray = dateStr.split('/'),
						year = dateArray[2],
						month = dateArray[0],
						day = dateArray[1];
					return new Date(year, month, day);
				}
			},
			sortAscending: {
				forks: false, // forks descendingly
				stars: false, // stars descendingly
				last_commit: false, // last_commit descendingly
			}
		});

		// bind sort button click
		$('#sorts').on( 'click', 'button', function() {
			var sortByValue = $(this).attr('data-sort-by');
			$grid.isotope({ sortBy: sortByValue });
		});

		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');
			});
		});
	}, 50);

});

// on ready state
$(document).ready(function () {
	'use strict';
});