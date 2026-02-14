function startVoice(){
let recog = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
recog.start();

recog.onresult = (e)=>{
let cmd = e.results[0][0].transcript;
alert("You said: "+cmd);

if(cmd.includes("open contact")) window.location="contact.html";
if(cmd.includes("hello")) speak("Hello Suhel, welcome to Universe X");
}
}

function speak(text){
let speech = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(speech);
}
