status = "";
objects = [];
function preload(){
    img = loadImage("remote.jpeg");
}
function setup(){
    canvas = createCanvas(360, 480);
    canvas.center();
    cocossd = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}
function draw(){
    image(img, 0,0,480,640)
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    cocossd.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results)
        objects = results;
    }
}
function back(){
    window.location("index.html");
}