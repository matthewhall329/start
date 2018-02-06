( function( $ ) {
	$(document).ready(function() {
			
		//Add img-responsive class to all images
		 $('body img').addClass("img-responsive");
		 // Remove img-responsive class for elementor content.
		 $('body.elementor-page .elementor img').removeClass('img-responsive');

		// Title in tooltip for top bar right icons
		$('.iconouter a[title]').tooltip( {placement: "bottom"} );

		// Nav Main DD Toggle
		$( ".navbarprimary .dropdowntoggle" ).click(function() {
			if( $(this).parent('li').hasClass('navbarprimary-open') )
			{
				$(this).parent('li').removeClass('navbarprimary-open');
			}
			else
			{
				$(this).parent('li').addClass('navbarprimary-open');
			}

			return false;
		});
		
			
	});
} )( jQuery );
