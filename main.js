var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("area").innerHTML = "";
    recognition.start()
}

recognition.onresult = function(event){

    var  content = event.results[0][0].transcript;
    document.getElementById("area").innerHTML = content;
    if(content == "tire minha selfie")
    {
        speak()
    }
    
}
var count = 0
function speak(){
    var synth = window.speechSynthesis;
    //speakData= document.getElementById("area").value;
    speakData = "tirando sua selfie em 5 segundos"
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach( camera );
    setTimeout(function()  {
        takeMySelf()    
    }, 10000);
  
    temp(count)

}

camera = document.getElementById("camera")

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeMySelf(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML = '<img id="selfie" src="'+data_uri+'"/>'
        document.getElementById("result2").innerHTML = '<img id="selfie" src="'+data_uri+'"/>'
        document.getElementById("result3").innerHTML = '<img id="selfie" src="'+data_uri+'"/>'
    })
}


function temp(count){
for(var i = 0; i<5; i++){
    count = count+1
    var synth = window.speechSynthesis;
    speakData = count
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
}
}