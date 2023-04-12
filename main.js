function setup()
{

  var canvas=createCanvas(550,550);
  canvas.position(600,125);

  video = createCapture(VIDEO);
  video.size(550,500);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function draw()
{

  background("red")

}

function modelLoaded()
{

 console.log("PoseNet is Initialized");   

}

function gotPoses(results)
{

  if(results.length > 0)
 {
 
     console.log(results);

 }

}