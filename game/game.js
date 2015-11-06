$(document).ready(function() {
	$("#start").click(function() {
    	$("#start").hide();
		$("#one").css("background-image", "url('http://info.cassidyturley.com/Portals/163401/images/Industrial%20warehouse%20inside.JPG')");
		$("#menu").hide();
		$("#m1").css("display", "block");
		$("#m2").css("display", "block");
		$("#m3").css("display", "block");
		$("#m4").css("display", "block");
	});
	
	$("#click").click(function() {
		$("#m1").css("left", "200px");
		$("#m2").css("left", "500px");
		$("#m3").css("left", "700px");
		$("#m4").css("left", "900px");
		$("#m1").css("top", "50%");
		$("#m2").css("top", "300px");
		$("#m3").css("top", "500px");
		$("#m4").css("top", "100px");
		$("#m1").css("bottom", "300px");
	});
}); 