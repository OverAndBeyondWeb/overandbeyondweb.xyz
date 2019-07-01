// JavaScript Document
var colors;
$(document).ready(function() {
    $('#searchButton').click(function(){
		alert('Search function disabled... Try again later.');
		$('#search').val("");	
	});
	var interval = setInterval(changeColors, 1500);
	//interval();
	setTimeout(function(){clearInterval(interval);}, 100000);
	
	
	
});
function changeColors(){
	colors = ["blue", "red", "purple", "aqua", "yellow", "orange", "lime", "teal", "fuchsia", "silver", "white", "maroon"];
	var colorIndex = Math.floor(Math.random()* 12);
	var typeColor = colors[colorIndex];
	console.log(typeColor);
	var liIndex = Math.floor(Math.random()* 13);
	console.log(liIndex);
	$('.skill').eq(liIndex).css("color", typeColor);
}