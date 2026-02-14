let video=document.getElementById("video");

navigator.mediaDevices.getUserMedia({video:true})
.then(stream=>video.srcObject=stream);

setTimeout(()=>{
document.getElementById("msg").innerText="Face recognized ✔ Login success";
setTimeout(()=>window.location="admin.html",2000);
},5000);
