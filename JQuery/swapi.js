$().ready(function(){
	$("#swpeople").text("hola");
	$.get('https://swapi.co/api/people/1/?format=json',function(data){
		$("#swpeople").text(data.name);
	},"json");
		
});