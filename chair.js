status = "";
objects = [];
function preload(){
    img = loadImage("chair.jpeg");
}
function setup(){
    canvas = createCanvas(425, 480);
    canvas.center();
    cocossd = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function draw(){
    image(img, 0,0,480,640)
    if(status != true){
        for(i=0;i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects detected";
            fill("#FF0000");
            document.getElementById("objects").innerHTML = "There are 2 big objects and cocoSSD has detected both";
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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
    window.location = "index.html";
}