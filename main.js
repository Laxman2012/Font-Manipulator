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

  background("white")
  textSize(difference);
  text("PETER" , 200 , 300 , )


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
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX); 
     console.log("leftWristX = " + leftWristX + "rightWristX = " + "difference = " + difference);

 }

}

difference=0;
rightWristX=0;
leftWristX=0;