// Firebase config (replace with your keys)
const firebaseConfig={
apiKey:"YOUR_KEY",
authDomain:"YOUR_DOMAIN",
databaseURL:"YOUR_DB_URL",
projectId:"YOUR_ID"
};

firebase.initializeApp(firebaseConfig);
let db=firebase.database();

function sendMessage(name,email,msg){
db.ref("messages").push({
name:name,
email:email,
message:msg
});
alert("Saved in cloud database");
}
