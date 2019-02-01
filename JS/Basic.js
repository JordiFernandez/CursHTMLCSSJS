function square(num) {
	return num*num;
}

function oddeven(num) {
	if(num%2==0) return "even";
	else return "odd";
}

function factorial(num){
	if (num==0) return 1;
	return num*factorial(num-1);
}

function random() {
	return Math.floor((Math.random() * 100) + 1);
}

function biggest(n1, n2, n3, n4){
	return Math.max(n1, n2, n3, n4);
}

function call() {
	return random();
}

function months(){
	var aux = ["Enero","Febrero","Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	console.log(aux);
}