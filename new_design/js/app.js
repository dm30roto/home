jQuery(document).ready(function ($) {	
	$('.logo a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,150);
		return false;
	});
	$('.nav li a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,150);
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
	$(".logo a").lettering().animateLetters({opacity:0},{opacity:1},{time:1200,reset:true});
});
