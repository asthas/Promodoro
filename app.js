var snd = new Audio("sound/sound.wav");
function updateTime(timer, display){
	console.log(timer)
	var h, m, s, time, duration;
	duration = timer;
	if(timer > 0){
		window.started = setInterval(function(){
			m = parseInt(timer/60, 10);
			s = parseInt(timer%60, 10);
			m = m<10?'0'+m:m;
			s = s<10?'0'+s:s;
			time = m+":"+s; 
			console.log(time);
			display.textContent =time;
			if(--timer < 0){
				display.textContent = "Time up!"
				snd.play();
				stopTimer();
			}
		}, 1000);
	}
}

function setTimer(counter){
	$("p").html(counter);
	stopTimer();
	var timer = counter*60;
	console.log(counter);
	var display = document.querySelector('#time');
	updateTime(timer, display);
}

function stopTimer(){
	clearInterval(window.started);
}

$(document).ready(function(){
	var counter = 0;
	$("#plus").click(function(){
		counter++;
		setTimer(counter);
	});
	$("#minus").click(function(){
		counter = counter > 0 ? counter - 1  : counter;
		setTimer(counter);
	});
});

