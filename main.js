Webcam.set({
    width :350 , 
    height :300,
    image_format : 'png',
    png_quality :90,
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
 function take_snapshot()
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML= '<img id= "captured_image" src ="'+data_uri+'"/>';

     });
 }
 console.log('ml5 version:', ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Rq_UtDRZW/model.json',modelLoaded);
 
 function modelLoaded(){
     console.log('Model Loaded!');
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
        toSpeak = "";
         if(perdiction1=="Victory"){
     document.getElementById("update_emoji").innerHTML= "&#9996;";
    toSpeak = "this is Victory";
    }
   else if(perdiction1=="super"){
        document.getElementById("update_emoji").innerHTML= "&#128076;";
        toSpeak = "this is Super";   
    }
     else if(perdiction1=="thumbsup"){
        document.getElementById("update_emoji").innerHTML= "&#128077;";
        toSpeak = "this is thumbsup";   
    }
    speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = toSpeak;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}