const width = 400;
const height = 300;
let ctx;
let ball = new Array();

class Ball{
	constructor(initx, inity, radius,color, dx, dy){
		this.x = initx;
		this.y = inity;
		this.radius = radius;
		this.color = color;
		this.dx = dx;
		this.dy = dy;
	}


	nextpos(){
		if(this.x + this.radius + this.dx > width ||  this.x - this.radius + this.dx < 0){
			this.dx = -this.dx;
		}
		if(this.y + this.radius + this.dy > height ||  this.y - this.radius + this.dy < 0 ){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;
	}
}

function init(){
	const cv = document.getElementById('dibuix');
	ctx = cv.getContext("2d");
	ball.push(new Ball(20,20,20,"blue",2,1));
	ball.push(new Ball(20,20,20,"red",2,2));
	ball.push(new Ball(20,20,20,"green",2,3));
	ball.push(new Ball(20,20,20,"orange",3,2));
	ball.push(new Ball(20,20,20,"grey",1,2));
	ball.push(new Ball(20,20,20,"purple",1,1));
	setInterval(update, 0.1);
		
}

function draw(x, y, radius, color){
	ctx.beginPath();
	ctx.arc(x,y,radius,0, Math.PI*2, true);
	ctx.fillStyle = color;
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,height);
}

function update(){
	clear();
	ball.forEach(ball =>{
		ball.nextpos();
	draw(ball.x, ball.y, ball.radius, ball.color);
	})
	
}

window.onload = function(){
	init();
}