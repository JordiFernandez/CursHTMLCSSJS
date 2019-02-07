var rotation = 0;
var initheight = 0;
var initwidth = 0;

function rotate2(degrees){
	$('#primer').css ({'transform' : 'rotateY(' + degrees + 'deg)'});
	return $('#primer');
}

function update(){
	rotation += 30;
	rotate2(rotation);
}
window.onload = function(){
	setInterval(update,1000);

	$("#big").click(function(){
			initwidth = $("#segon").width();
			initheight = $("#segon").height();
			initheight +=20;
			initwidth += 50;
		$("#segon").animate({

			height: initheight+"px",
			width: initwidth+"px"
		}, 1000);
	});

	$("#small").click(function(){
		initwidth = $("#segon").width();
		initheight = $("#segon").height();
		initheight -=20;
		initwidth -= 50;
		$("#segon").animate({
			height: initheight+"px",
			width: initwidth+"px"
		}, 1000);
	});

}

