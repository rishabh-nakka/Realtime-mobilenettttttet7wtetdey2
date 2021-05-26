function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(800,500)
  video = createCapture(VIDEO);
  video.hide();
  console.log("ml5 "+ml5.version);
  classifier=ml5.imageClassifier("MobileNet",modelLoaded)
}
function draw(){
  image(video,0,0,300,300)
  classifier.classify(video,gotResult)
}
function modelLoaded(){
  console.log("Rishabh@tooooothachee.com@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
}
function gotResult(error,result){
  if(error){
    console.log(error)
  }
  else{
    console.log(result)
    document.getElementById("object_h2").innerHTML=result[0].label
    document.getElementById("accuracy_h2").innerHTML=result[0].confidence.toFixed(2)*100+"%"
  }
}
