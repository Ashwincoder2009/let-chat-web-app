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
room_name=localStorage.getItem("room_name");
function send(){
message=document.getElementById("Message").value;
firebase.database().ref(room_name).push({
name:user_name,
message:message,
like:0
});
document.getElementById("Message").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id +" value="+ like +" onclick='UpdateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>"
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
    } });  }); }
getData();
function UpdateLike(firebase_message_id){
console.log(firebase_message_id);
buttonid=firebase_message_id;
UpdatedLikes=Number(like)+1;
console.log(UpdatedLikes);
firebase.database().ref(room_name).child(firebase_message_id).update({
like:UpdatedLikes
});
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}