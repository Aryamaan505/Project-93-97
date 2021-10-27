// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyBQCVAXhKXLk2dm90VagnnSuZBhh0R-g3g",
      authDomain: "kwitter-23d4f.firebaseapp.com",
      databaseURL: "https://kwitter-23d4f-default-rtdb.firebaseio.com",
      projectId: "kwitter-23d4f",
      storageBucket: "kwitter-23d4f.appspot.com",
      messagingSenderId: "1016579349201",
      appId: "1:1016579349201:web:b2729c66209273def7c3f0",
      measurementId: "G-RT6S9M9E5C"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Caution:If u see my js code dont even put a space in the code below.
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room  Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });
});
}
getData();

function redirectToRoomName(Name){
console.log(Name);
localStorage.setItem("room_name",Name);
window.location="index.html";
}

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="index.html";
}

function logout(){
      localStorage.removeItem ("room_name");
      localStorage.removeItem ("user_name");
      window.location="index.html";
}