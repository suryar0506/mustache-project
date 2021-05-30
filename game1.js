let balloon;
let balloonWasClicked = false;
let numberOfBalloonClicks = 0;
let x,y;
let x1,y1;
let x3, y3;

function preload(){
    balloon = loadImage('balloon_single.png');
}

function directions(){
  window.alert("The balloons will keep falling until you click them a certain number of times. When you reach the limit, you shall be told. May the clicking begin!");
  document.getElementById("thumbs_up_image").style.display = "none";
}

function setup(){
canvas = createCanvas(400, 400);
canvas.position(550, 200);
x = 200;
y = 0;

x1 = 100;
y1 = 0;

x3 = 300;
y3 = 0;
}

function draw(){
  background(255);
    if(balloonWasClicked == false || numberOfBalloonClicks <= 100){
      //fill(256,0,0);
      image(balloon, x, y, 100, 100);

      //fill(0,256,0);
      image(balloon, x1, y1, 100, 100);

      //fill(0,0,256);
      image(balloon, x3, y3, 100, 100);

  y = y + 7;
  y1 = y1 + 6;
  y3 = y3 + 4;

  if (y > 400) {
    y = 0;
  }

  if (y1 > 400) {
    y1 = 0;
  }

  if (y3 > 400) {
    y3 = 0;
  }
    }
}

function mouseClicked (){
 console.log("Mouse clicked");
 console.log(mouseX, mouseY);
 document.getElementById("thumbs_up_image").style.display = "none";
 if(
  mouseX > x &&  
  mouseY > x &&
  mouseY < 100 + x &&
  mouseX < 100 + x
 ) { 
balloonWasClicked = true; 
numberOfBalloonClicks = numberOfBalloonClicks + 1;
console.log("Balloon clicks: " + numberOfBalloonClicks);
document.getElementById("hit_or_miss").innerHTML = numberOfBalloonClicks;
document.getElementById("thumbs_up_image").style.display = "block";
 }

 if(
  mouseX > x1 &&  
  mouseY > x1 &&
  mouseY < 100 + x1 &&
  mouseX < 100 + x1
 ) { 
balloonWasClicked = true; 
background(255);
numberOfBalloonClicks = numberOfBalloonClicks + 1;
console.log("Balloon clicks: " + numberOfBalloonClicks);
document.getElementById("hit_or_miss").innerHTML = numberOfBalloonClicks;
document.getElementById("thumbs_up_image").style.display = "block";
 }

 if(
  mouseX > x3 &&  
  mouseY > x3 &&
  mouseY < 100 + x3 &&
  mouseX < 100 + x3
 ) { 
balloonWasClicked = true; 
background(255);
numberOfBalloonClicks = numberOfBalloonClicks + 1;
console.log("Balloon clicks: " + numberOfBalloonClicks);
document.getElementById("hit_or_miss").innerHTML = numberOfBalloonClicks;
document.getElementById("thumbs_up_image").style.display = "block";
 }

 if(numberOfBalloonClicks == 100){
window.alert("Good Job! The game is finished! Care for another round?");
location.reload();
 }
}

