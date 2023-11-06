var video;
let vid = document.getElementById('player1')
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	vid.autoplay = false
	vid.loop = false
});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	vid.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   vid.pause();
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing down video");
	current_speed = vid.playbackRate
	new_speed = current_speed - 0.1
	vid.playbackRate=new_speed;
	console.log("The New Speed is: " + new_speed)
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding up video");
	current_speed = vid.playbackRate
	new_speed = current_speed + 0.1
	vid.playbackRate=new_speed;
	console.log("The New Speed is: " + new_speed)
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead in video");
	if (vid.currentTime + 10 > vid.duration) {
		vid.currentTime = 0
	}
	else {
		vid.currentTime += 10
	}
	console.log("The Location is: " + vid.currentTime)
});
document.querySelector("#mute").addEventListener("click", function() {
	console.log("In Mute");
	if (vid.muted === false) {
		vid.muted = true
		console.log("The Video is muted")
		this.innerHTML = "Unmute"
	}
	else {
		vid.muted = false
		console.log("The Video is unmuted")
		this.innerHTML = "Mute"
	}
});



