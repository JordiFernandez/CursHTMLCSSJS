var min=0;
var secs=0;
var horas = 0;
var minS = "00";
var	secsS = "00";
var horasS = "00";

function transform(number) {
   
     return (number < 10 ? '0' : '') + number
   
}

function time(){
	++secs;
	if(secs == 60){
		++min;
		secs = 0;
		if (min = 60) {
			++horas;
			min = 0;
		}
		if (horas==24){
			horas = 0;
		}
	}
	minS = transform(min);
	secsS = transform(secs);
	horasS = transform(horas);
	document.getElementById('clock').innerHTML= horasS + ':' + minS + ':' + secsS;
}

setInterval(time,1000);