var x = 0;
var y = 0;

function transformation(){
	document.getElementById("triangle").getContext("2d").rotate(90deg);
}

window.onload = function(){
window.setInterval(transformation,100);
}