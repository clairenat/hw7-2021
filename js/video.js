var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay;
});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
 });