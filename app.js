function updateTime(){
	var circle = document.getElementById("time");
	var d = new Date();
	var h = (d.getHours() < 10?'0'+d.getHours():d.getHours());
	var m = (d.getMinutes() < 10?'0'+d.getMinutes():d.getMinutes());
	var s = (d.getSeconds() < 10?'0'+d.getSeconds():d.getSeconds());
	var date = h+':' + m + ':' + s;
	circle.innerHTML = date;
}

setInterval(updateTime, 1000);

$(document).ready(function(){
	var counter = 0;
	$("#plus").click(function(){
		counter++;
		$("p").html(counter);
	});
	$("#minus").click(function(){
		if(counter > 0){
			counter--;
		}
		
		$("p").html(counter);
	});
	
});

