prediction1="";
prediction2="";

Webcam.set({
    width:300,
    height:320,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagecap" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-m34ALzK8/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded !!');
}

function speak(){
    var cookie=window.speechSynthesis;
    speak1="Your First Prediction: "+prediction1;
    speak2="Your Second Prediction:  "+prediction2;
    var simonsays=new SpeechSynthesisUtterance(speak1+speak2);
    cookie.speak(simonsays);
}

