var nose_x, nose_y;

function preload(){
mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300)
video.hide()

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x - 25;
        nose_y = results[0].pose.nose.y;
        console.log("Nose's x coordinate : " + nose_x);
        console.log("Nose's y coordinate : " + nose_y);
    }
}

function modelLoaded(){
    console.log("Posenet looks good.");
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, nose_x, nose_y, 50, 25);
}

function take_snapshot(){
    save('mustache.png');
}

function move_on(){
    window.location = "game1.html";
}



