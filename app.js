var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var txtSize = 15;

myTime();
bounce();




btn1.addEventListener("click", () => {
    var color = changeColor();
    document.documentElement.style.setProperty('--bg-color', color);
    color = changeColor();
    document.documentElement.style.setProperty('--txt-color', color);
    color = changeColor();
    document.documentElement.style.setProperty('--btn-color', color);
    color = changeColor();
    document.documentElement.style.setProperty('--btn-txt-color', color);
    color = changeColor();
    document.documentElement.style.setProperty('--btn-hover-color', color);
    color = changeColor();
    document.documentElement.style.setProperty('--btn-hover-txt', color);
    color = changeColor();
    document.documentElement.style.setProperty('--header-tag-color', color);
    color = changeColor();
    document.documentElement.style.setProperty('--border-color', color);
   
})


btn2.addEventListener("click", () => {

        fontSize();
})


btn3.addEventListener("click", () => {

    color = changeColor();
    document.documentElement.style.setProperty('--grad-color1', color);
    color = changeColor();
    document.documentElement.style.setProperty('--grad-color2', color);
    color = changeColor();
    document.documentElement.style.setProperty('--grad-color3', color);
})



function changeColor(){
    red = "" + Math.floor(Math.random() * 256); 
    green = "" + Math.floor(Math.random() * 256); 
    blue = "" + Math.floor(Math.random() * 256);
    color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return color;
}

function fontSize(){

    txtSize += 2;

    var result = txtSize+"px";
    document.documentElement.style.setProperty('--font-size', result);
    

}


function myTime(){



var hour, min, sec, h, m, s;
var d = new Date();


h = d.getHours();
m = d.getMinutes();
s = d.getSeconds();


hour = document.querySelector("#hour");
min = document.querySelector("#min");
sec = document.querySelector("#sec");



setInterval(function(){
  
    if(s < 59){
        s++;
    }else{
        if(m < 59){
        m++;
        s = 0;
        }else{
            if(h < 23){
                h++;
                m = 0;
                s = 0;
            }else{
                h = 0;
                m = 0;
                s = 0;
            }
        }
    }


    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

    
}, 1000);
}



function bounce(){

var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

var width = 150,
	height = 250;

canvas.height = height; canvas.width = width;

var ball = {},
		gravity = 0.2,
		bounce = 0.9;

ball = {
	x: width/2,
	y: 50,
	
	radius: 55,
	color: "purple",
	
	// Velocity components
	vx: 0,
	vy: 1,
	
	draw: function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
	}
};

function clearCanvas() {
	ctx.clearRect(0, 0, width, height);
}

function update() {
	clearCanvas();
	ball.draw();

	ball.y += ball.vy;

	ball.vy += gravity;

	if(ball.y + ball.radius > height) {

		ball.y = height - ball.radius;
		ball.vy *= -bounce;
	}
}

setInterval(update, 1000/60);

}
