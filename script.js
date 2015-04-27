function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var i = randomNumber(0,92);
var counter = 0;

var feedbackArray = [];




$(document).ready(function (){
	$('body').spectrum();
	$.get("text.txt", function(data){
		feedbackArray = data.split("\n");
	});
	var interval = setInterval(function(){
			console.log("click button works");
			$("#display").text(feedbackArray[i]);
			$("#display").hide().fadeIn(4000).fadeOut(4000);
			i++; counter++;
			if(counter === feedbackArray.length){
				i = 0;
				counter = 0;
			}
	}, 8000);
});
