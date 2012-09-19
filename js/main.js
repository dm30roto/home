var pages = ["#home", "#experience", "#education", "#aboutme", "#aboutsite"];
$(document).ready(function() {
	$("#home").fadeIn(1500);
	$("#homeLi").addClass("liSelected");
});

function switchContent(newPage) {
	$("ul#nav li[class='liSelected']").removeClass("liSelected");	
	$("#content").children().hide();
	$('#'+newPage).fadeIn(1500);
	$('#'+newPage+'Li').addClass("liSelected");
}