/* Foundation v2.2.1 http://foundation.zurb.com */
jQuery(document).ready(function ($) {
	// $(".jumbotron h1").lettering().animateLetters({opacity:0},{opacity:1},{randomOrder:false,time:1200,reset:true});
	// $(".jumbotron p").lettering().animateLetters({opacity:0},{opacity:1},{randomOrder:false,time:500,reset:true});
	
	$('#home').animate({'opacity':'1'},600);    
	$('#about').animate({'opacity':'1'},1000);    

	/* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i) {
            
            var bottom_of_object = $(this).position().top - 50;// + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object )
            {
                $(this).animate({'opacity':'1'},1000);        
            }
        }); 
    });

	$('a.navbar-brand').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,50);
		return false;
	});
	$('ul.navbar-nav li a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,70);
		return false;
	});
	$('footer p a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,50);
		return false;
	});
	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	
	}   
});