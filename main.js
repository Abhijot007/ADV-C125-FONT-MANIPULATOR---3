leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;

function setup() {
    canvas= createCanvas(550,550);
    canvas.position(560,150);

    video= createCapture(VIDEO);
    video.size(500,500);

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background("grey");
    document.getElementById("size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("black");
    text('Text',40,200);
}

function modelLoaded() {
console.log('PoseNet is initialised');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}