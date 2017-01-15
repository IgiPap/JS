$(function(){
var carouselList = $("#carousel ul"),
	left = document.getElementById('left'),
	right = document.getElementById('right');
	
	setInterval(changeSlide, 3000);

function changeSlide(){
	carouselList.animate({'marginLeft':-500}, 500, moveFirstSlide);
}

function moveFirstSlide(){
	var firstItem = carouselList.find("li:first"),
		lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}
});