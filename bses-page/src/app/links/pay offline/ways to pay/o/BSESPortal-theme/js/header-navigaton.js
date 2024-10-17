$(document).ready(function() {
	
	/* responsve hamburger and search menu navigation link */
	$('#hamburgerNav, #searchNav').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		currentNode = $(this); 
		navId = currentNode.attr('data-target');
		
		if(currentNode.attr('id') == "searchNav"){
			closeItem = "#hamburgerNav";
		} else {
			closeItem = "#searchNav";
		}
		closeOtherMenu(closeItem);
		closeMainNav();
		
		if ($(navId).hasClass('menu-active')) {
			// close menu
			currentNode.removeClass('menu-active');
			currentNode.closest('li').removeClass('menu-active');
			$(navId).removeClass('menu-active');
		} else {
			// opne menu
			currentNode.addClass('menu-active');
			currentNode.closest('li').addClass('menu-active');
			$(navId).addClass('menu-active');
			
			/* close menu on outside click - start */
			$(window).click(function(e) {
				currentWindowNode = $(e.target);
				if(currentWindowNode.closest('.menu-active').length == false && !currentWindowNode.hasClass('menu-active')){
					closeOtherMenu('#hamburgerNav');
					closeOtherMenu('#searchNav');
				}
			});
			/* close menu on outside click - end */
		}
	});
	
	function closeOtherMenu(closeItem){
		closeItemNode = $(closeItem); 
		closeItemNavId = closeItemNode.attr('data-target');
		
		closeItemNode.removeClass('menu-active');
		closeItemNode.closest('li').removeClass('menu-active');
		$(closeItemNavId).removeClass('menu-active');
	}

	function closeMainNav(){
		$('.ril-energy-home .navigation-home .main-navigation').removeClass('show-all');
		$('body').removeClass('main-menu-show-all');
		$('#mainNavigation .navbar-nav > li').removeClass("hover open");
	}
	
	/* responsve hamburger and search menu navigation link */

	/* home main navigation hover show all item start */
	if($('html').hasClass('view-desktop')){
		$('.ril-energy-home .navigation-home .main-navigation').hover(function() {
			$(this).addClass('show-all');
			$('body').addClass('main-menu-show-all');
			
			/* set main-menu height */
			/*var mainHegiht = $(this).height();
			var highest = null;
			$(this).find(".navbar-nav .dropdown .dropdown-menu").each(function() {  //find the height of your highest link
				var h = $(this).height();
				if (h > highest) {
					highest = h;
				}
			});
			highest = highest + mainHegiht;
			$(this).height(highest);  //set all your links to that height.*/
			$('#carousel-example-generic').css({
				'height' : '', 		/*'height' : '0',*/
				'overflow' : '' 	/*'overflow' : 'hidden'*/
			});

			/* close menu on outside click - start */
			$(window).click(function(e) {
				currentWindowNode = $(e.target);
				if(currentWindowNode.closest('.main-navigation').length == false && !currentWindowNode.hasClass('show-all')){
					$(this).removeClass('show-all');
					$('body').removeClass('main-menu-show-all');
					/*$(this).height('');*/
					$('#carousel-example-generic').css({
						'height' : '',
						'overflow' : ''
					});
				}
			});
			/* close menu on outside click - end */

		}, function() {
			$(this).removeClass('show-all');
			$('body').removeClass('main-menu-show-all');
			/*$(this).height('');*/
			$('#carousel-example-generic').css({
				'height' : '',
				'overflow' : ''
			});
		});
	};
	/* home main navigation hover show all item end */

	/* main navigation hover start */
	/*$('#mainNavigation .navbar-nav > li > a').click(function() {
        $(this).parent('li').addClass("hover open");
	}, function() {
		$(this).parent('li').removeClass("hover open");
    });*/
	/*$('#mainNavigation .navbar-nav > li').on('click hover touchstart',function() {
		$(this).toggleClass("hover open");
	});*/
	/*$('#mainNavigation .navbar-nav > li.dropdown > a').on('click mouseover touchstart', function (e) {
		e.preventDefault();
		e.stopPropagation();
		parentNode = $(this).parent();
		if ($(parentNode).is('.hover, .open')) {
			parentNode.removeClass('hover open');
		} else {
			parentNode.addClass('hover open');
		}
	});
	$('body').on('click mouseover touchstart', function (e) {
		if (!$('#mainNavigation .navbar-nav > li.dropdown').is(e.target) 
			&& $('#mainNavigation .navbar-nav > li.dropdown').has(e.target).length === 0 
			&& $('.open').has(e.target).length === 0
		) {
			$('#mainNavigation .navbar-nav > li.dropdown').removeClass('open hover');
		}
	});*/
	$("#mainNavigation .navbar-nav > li.dropdown").hover(function () {
			$(this).addClass("hover open");
		},
		function () {
			$(this).removeClass("hover open");
		}
	);
	$('#mainNavigation .navbar-nav > li.dropdown > a').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	/* main navigation hover end */

	/* home main navigation collapsed - start */  
	$('.navbar.main-navigation .navbar-nav .child-menu > li > [data-toggle="collapse"]').on('click', function(e){
		e.stopPropagation();
		e.preventDefault();
		currentNode = $(this); 
		navId = currentNode.attr('href');
  
		if (currentNode.hasClass('collapsed')) {
			$(navId).animate({
				height: "toggle"
			}, 200, function() {
				/*L7-359 Top Menu | Expand Collapsed Issue*/
				$('.navbar.main-navigation .navbar-nav .child-menu > li > [data-toggle="collapse"]').each(function( index ) {
				var curObj = $(this);
				var curObjNavId = $($(curObj.attr('href')));
				curObj.addClass('collapsed');
				curObjNavId.removeClass('in');
				});
				/*L7-359 Top Menu | Expand Collapsed Issue*/
				currentNode.removeClass('collapsed');
				$(navId).addClass('in');
				$(navId).removeAttr('style');
			});
		} else {
			$(navId).animate({
				height: "toggle"
			}, 200, function() {
				currentNode.addClass('collapsed');
				$(navId).removeClass('in');
			});
  		}
 });
	/*$('.navbar.main-navigation .navbar-nav .child-menu > li input').on('click touchstart', function(e){
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
	})
	$('.navbar.main-navigation .navbar-nav .child-menu > li .dropdown-menu').add('.navbar.main-navigation .navbar-nav .child-menu > li .dropdown-menu *').on('click touchstart', function(e){
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
	})
	$(window).on('click hover touchstart', function(e) {
		currentWindowNode = $(e.target);
		if(currentWindowNode.closest('.dropdown-menu').length == true){
			e.stopPropagation();
			e.preventDefault();
			e.stopImmediatePropagation();
			currentWindowNode.closest('.dropdown').addClass('hover open')
		}
	});*/
	/* home main navigation collapsed - end */

	/* Side Nav Bar arrow click for mobile - start */
	$(".view-mobile .sidebar-nav .nav-icon-wrapper .nav-title").on('click', function() {
		titleBar = $(this);
		sideBar = titleBar.closest('.sidebar-nav');
		navBar = sideBar.find('.navbar .navbar-collapse');
		if(!navBar.is(':visible')){
			navBar.show();
			titleBar.addClass('open');
		} else{
			navBar.hide();
			titleBar.removeClass('open');
		}
	});
	/* Side Nav Bar arrow click for mobile - end */

});
