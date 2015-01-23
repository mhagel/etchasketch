var n = 16;  //number of boxes per row

$(document).ready(function() {

	grid(n);

});


function grid(n) {
	var size = 960;
	var boxSize = (960/n);
	for (var i = 0; i < n; i++) {
		$("#container").append("<div class="box"></div>");
	}
	$(".square").width(boxSize);
	$(".square").height(boxSize);
}