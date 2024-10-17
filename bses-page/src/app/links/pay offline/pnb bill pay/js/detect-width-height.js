$(document).ready(function() {
	
	/* detect width/height */
	function viewport()
	{
		var e = window, a = 'inner';
		if ( !( 'innerWidth' in window ) ){
			a = 'client';
			e = document.documentElement || document.body;
		}
		return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
	};
	
	/* add class to html node as per viewport */
	function updateView(){
		$("html").removeClass (function (index, css) {
		    return (css.match (/(^|\s)view-\S+/g) || []).join(' ');
		});
		
		if(viewport().width > 991){
			$('html').addClass('view-desktop');
		}
		
		if(viewport().width >= 768 && viewport().width <= 990){
			$('html').addClass('view-tablet');
		}
		
		if(viewport().width <= 767){
			$('html').addClass('view-mobile');
		}
		
		
	}
	
	updateView();
	
	$(window).resize(function() {
		updateView();
	});

});
