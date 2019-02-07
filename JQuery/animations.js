var rotation = 0;

function rotate(degrees){
	$('#1').css ({'transform' : 'rotate' + 'deg'});
	return $('#1');
}

$('#1').click(function(){
	rotation += 5;
	$('#1').rotate(rotation);
})