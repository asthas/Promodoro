function updateTime(){
	var circle = document.getElementById("time");
	var d = new Date();
	var h = (d.getHours() < 10?'0':d.getHours());
	var m = (d.getMinutes() < 10?'0':d.getMinutes());
	var s = d.getSeconds();
	var date = h+':' + m + ':' + s;
	circle.innerHTML = date;
}

setInterval(updateTime, 1000);