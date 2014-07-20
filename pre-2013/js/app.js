jQuery(document).ready(function ($) {	
	$('a.brand').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,50);
		return false;
	});
	$('ul.main-menu li a').click(function(){
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
	//$("a.brand").lettering().animateLetters({opacity:0},{opacity:1},{time:1200,reset:true});
	var email=$('.email'), subj=$('.subject'), msg=$('.message'), submit=$('.btn-submit');
	function checkInputs(){
	  if(email.val() != '' && subj.val() != '' && msg.val() != '' && submit.attr("disabled") == "disabled"){
		submit.removeAttr("disabled");
	  }
	  else if((email.val() == '' || subj.val() == '' || msg.val() == '') && submit.attr("disabled") == undefined){
		submit.attr("disabled", "disabled");
	  }
	}
	email.keyup(function () {
	  checkInputs();
	});
	subj.keyup(function () {
	  checkInputs();
	});
	msg.keyup(function () {
	  checkInputs();
	});
	
	$("#emailForm").submit(function(event) {
		/* stop form from submitting normally */
		event.preventDefault(); 
		// Make a request to backend
		$.ajax({
            type:'POST',
            url: 'email.php',
            data: { emailAddr: email.val(), subject: subj.val(), message: msg.val() },
            success:function(data){
                    //Need to split data here
					if(data) {
				  alert('Email Success! :)');
			  }
			  else {
				  alert('Email Error! Please provide a valid email address.');  
			  }
            }
        });
/*
		$.post('email.php', { emailAddr: email.val(), subject: subj.val(), message: msg.val() }, 
			function( data ) {
			  if(data) {
				  alert('Email Success! :)');
			  }
			  else {
				  alert('Email Error! Please provide a valid email address.');  
			  }
		  });
		  return false;
	*/});
});
