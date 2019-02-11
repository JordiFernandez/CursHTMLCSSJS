var imgArray = new Array();
imgArray = ["img/img1.jpg","img/blue.png","img/green.png"]

var aux = 0;

function changeimg () {
++aux;
var change = aux%3;
document.getElementById('image').src = imgArray[change];

}
