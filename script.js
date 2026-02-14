// Loader
window.onload=()=>{
document.getElementById("loader")?.style.display="none";
particlesJS.load('particles-js','https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/particles.json');
}

// Dark Mode
function toggleMode(){
document.body.classList.toggle("dark");
}

// Scroll animation
const fades=document.querySelectorAll(".fade");
window.addEventListener("scroll",()=>{
fades.forEach(sec=>{
if(sec.getBoundingClientRect().top < window.innerHeight-100){
sec.classList.add("show");
}
});
});

// Login
function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;
if(u=="admin" && p=="1234"){
window.location="admin.html";
}else{
document.getElementById("msg").innerText="Wrong login!";
}
}

// Contact (Database demo)
function sendMessage(e){
e.preventDefault();
alert("Message saved to database (Firebase ready)");
}

// Sound
let audio=new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
function playSound(){audio.play();}
