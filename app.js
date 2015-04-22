$(document).ready(function() {
	var color = 'white';
	var colors = "white red blue green yellow";
	$(".box").on("click", function() {
		$(this).addClass(color);
	});

	$(".box").dblclick(function(){
		$(this).removeClass(colors);
	});

	$("#reset").click(function() {
		$(".box").removeClass(colors);
	});

	$("#red").click(function() {
		color = 'red';
	});

	$("#green").click(function() {
		color = 'green';
	});

	$("#yellow").click(function() {
		color = 'yellow';
	});

	$("#blue").click(function() {
		color = 'blue';
	});

	$("#white").click(function() {
		color = 'white';
	});
})