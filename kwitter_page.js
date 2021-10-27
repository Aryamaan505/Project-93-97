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
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val();
             if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("Message").value;
      firebase.database().ref(room_name).push({
            name:user_name, Message:msg;
            like:0;
      });
      document.getElementById("Message").value=" ";
}