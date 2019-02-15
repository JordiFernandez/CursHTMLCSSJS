var imgArray = new Array();
imgArray = ["img/banner1.png","img/banner2.png"]

var aux = 0;

function changeimg () {
if(aux==0) aux = 1;
else if (aux == 1) aux = 0;
document.getElementById('imagen').src = imgArray[aux];

}



window.onload = function(){
	setInterval(changeimg,5000);

	$(".idiv").animate({
		fontSize: "20px"
	},1000);
}
