var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =  new SpeechRecognition();

function start()
             {
        document.getElementById("textarea").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    //2. CREATE THE CONTENT VARIABLE TO STORE THE TRANSCRIPT OF THE VOICE:
    var content = event.results[0][0].transcript;
    

    document.getElementById("textarea").innerHTML = content;


    
    if(content == "Take my selfie"){
        speak(); 

    }
   

    
}



function speak(){
    var synth = window.speechSynthesis;

    speak_data = " Tomando una selfie en 10 ";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        takeSnapshot();
    }, 10000);

}

Webcam.set({
    width:400,
    height:400,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("camera");

function  takeSnapshot(){
    Webcam.snap( function(data_uri) {
        document.getElementById("result").innerHTML = ' <img id="selfie" src = "' + data_uri + ' "/>';
    } );
}
  