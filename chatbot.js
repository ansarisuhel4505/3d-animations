let bot=document.createElement("div");
bot.innerHTML=`<div id="chatbot">
<h3>Chatbot</h3>
<input id="q" placeholder="Ask...">
<button onclick="reply()">Send</button>
<p id="ans"></p>
</div>`;
document.body.appendChild(bot);

function reply(){
let q=document.getElementById("q").value;
let a=document.getElementById("ans");
if(q.includes("hello")) a.innerText="Hello Suhel!";
else if(q.includes("gonda")) a.innerText="You are in Gonda!";
else a.innerText="I am Omniverse Bot 🤖";
}
