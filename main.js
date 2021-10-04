perdiction = "";

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById('camera');
Webcam.attach('#camera');
 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById('result').innerHTML= '<img id= "captured_image" scr="'+data_uri+'"/>';

     });
 }
 console.log('ml5 version:', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rq_UtDRZW/model.json',modelLoaded);
 
 function modelLoaded(){
     console.log('Model Loaded!');
 }

 function speak(){
     var synth = window.speechSynthesis;
     speak_data_1 = 'the first prediction is'+ perdiction;
     var utterThis = new SpeechSynthesisUtterance(speak_data_1);
     synth.speak(utterThis);
 }
 function check(){
     img = document.getElementById('captured_image');
     classifier.classify(img , gotResult)
 }

 function gotResult(error, results){
     if(error) {
         console.error(error);
     } else{
         console.log(results);
         document.getElementById("result_emotion_name").innerHTML= results[0].label;
         perdiction1 =results[0].label;
        speak();
        if(results[0].label=="happy"){
     document.getElementById("update_emoji").innerHTML= "&#9996;";
    }
    if(results[0].label=="sad"){
        document.getElementById("update_emoji").innerHTML= "&#128076;";
       }
       if(results[0].label=="angry"){
        document.getElementById("update_emoji").innerHTML= "&#128077;";
       }
    }
}