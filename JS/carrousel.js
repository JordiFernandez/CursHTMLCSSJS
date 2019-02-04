var imgArray = new Array();
imgArray = ["img/red.png","img/blue.png","img/green.png"]

var aux = 0;

function changecolor () {
var change = aux%3;
document.getElementById('image').src = imgArray[change];
++aux;

}

window.onload = function (){
	setInterval(changecolor, 2000);
}