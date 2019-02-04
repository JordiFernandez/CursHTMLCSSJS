var imgArray = new Array();
imgArray = ["img/red.png","img/blue.png","img/green.png"]

var min=0;
var secs=0;
var horas = 0;
var minS = "00";
var	secsS = "00";
var horasS = "00";
var aux = 0;

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


function changecolor () {
++aux;
var change = aux%3;
document.getElementById('image').src = imgArray[change];

}


function hello(){
	var person = document.getElementById("nom").value;
	if (person != null) {
	  document.getElementById("name").innerHTML =
	  "Hello " + person;
	}
}

window.onload = function (){
	setInterval(changecolor, 2000);
	setInterval(time,1000);
}

