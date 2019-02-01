function hello(){
	var person = prompt("Please enter your name");

	if (person != null) {
	  document.getElementById("name").innerHTML =
	  "Hello " + person;
	}
}

function hello1(){
	var person = document.getElementById("nom").value;
	if (person != null) {
	  document.getElementById("name").innerHTML =
	  "Hello " + person;
	}
}

window.onload=function(){
	hello();
};


