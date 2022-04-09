var firebaseConfig = {
  apiKey: "AIzaSyBB5p5YXH-URDgynMNP5J1MjiGRnRDVe8o",
  authDomain: "let-chat-web-app-9f61b.firebaseapp.com",
  projectId: "let-chat-web-app-9f61b",
  storageBucket: "let-chat-web-app-9f61b.appspot.com",
  messagingSenderId: "210724506873",
  appId: "1:210724506873:web:2308a42539b3b5e6236628",
  measurementId: "G-5GFJJ0K6QY"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+ " " + user_name + "!";

function AddRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"Adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name="+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='RedierectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();
function RedierectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
