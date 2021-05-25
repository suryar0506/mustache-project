let balloon;
let numberOfBalloonClicks = 0;

function preload(){
    balloon = loadImage('balloon_single.png');
}

function setup(){
canvas = createCanvas(400, 400);
canvas.center();
}

function draw(){
    fill(256,0,0);
     image(balloon, 10, 10, 100, 100);
     image(balloon, 110, 10, 100, 100);
     image(balloon, 210, 10, 100, 100);
     image(balloon, 10, 110, 100, 100);
     image(balloon, 110, 210, 100, 100);
     image(balloon, 210, 310, 100, 100);
}

function mouseClicked (){
 console.log("Mouse clicked");
 console.log(mouseX, mouseY);

 if(
   mouseX == 10 ||
   mouseX == 110 ||
   mouseX == 210
 ){ 
numberOfBalloonClicks = numberOfBalloonClicks + 1;
console.log(numberOfBalloonClicks);
 }

 if (numberOfBalloonClicks == 100){
document.getElementById("hit_or_miss").innerHTML = "You Win!";
remove();
 }

}
