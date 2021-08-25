function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",model_loaded)
}
function draw(){
  image(video,0,0,300,300)
  classifier.classify(video,got_results)
}
function model_loaded(){
  console.log("model_loded")
}
function got_results(error,results){
if(error){
  console.error(error);
}
else{
  console.log(results)
  document.getElementById("result_object_name").innerHTML=results[0].label
  document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
}

}

