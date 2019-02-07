var id=1;
function pokemon(){
	$.get('http://51.144.236.83:8080/pokemons/'+ id ,function(data){
		$("#Code").text(data.num);
		$('#NS').attr("src",data.images[0].front);
		$('#SS').attr("src",data.images[1].front_shiny);
		$('#N').text(data.name);
		if (data.types[1]!=null) $('#T').text(data.types[0].type.name + '/' + data.types[1].type.name);
		else {
			
			$('#T').text(data.types[0].type.name);
		}
		 if(data.moves.HM!=null) $('#HM').text(data.moves.HM);
		 else $('#HM').text("none");
 	},"json");
};

function next(){
	++id;
	if(id > 6) id = 1;
	pokemon();
}

function previous(){
	--id;
	if(id<1) id = 6;
	pokemon();
}

window.onload = pokemon();