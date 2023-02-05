function setup(){
    canvas=createCanvas(600,600)
   canvas=center()
    video.createCapture(VIDEO);
    video.hide()
    posenent=ml5.posenet(video,modelLoaded);
    posenet.on('pose',gotposes);
}
song="";
function modelLoaded(){
    console.log("modelLoaded");
}
function preload(){
song=loadSound("music.mp3");
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
song.play();
song.setVolume(1);
song.rate(1);
}

rightwristx=0,
rightwristy=0;
leftwristx=0;
leftwristy=0;
function gotposes(results){
    if(gotposes.length>0){
        console.log(gotposes);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log(leftwristx+"=leftwristx"+leftwristy+"=leftwristy");
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log(rightwristx+"=rightwristx"+rightwristy+"=rightwristy");
    }
}