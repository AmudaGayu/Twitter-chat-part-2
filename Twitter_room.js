//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAQP1JVHHjY6s7FawwQNBjD1WQItZ1l1G4",
    authDomain: "twitter-f59d4.firebaseapp.com",
    databaseURL: "https://twitter-f59d4-default-rtdb.firebaseio.com",
    projectId: "twitter-f59d4",
    storageBucket: "twitter-f59d4.appspot.com",
    messagingSenderId: "790017198575",
    appId: "1:790017198575:web:fe5f56dd00dbb2a8828e1a",
    measurementId: "G-BRKYJ5R12X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

usernames = localStorage.getItem("Username");
document.getElementById("username").innerHTML = "Welcome " + usernames;

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function addroom() {
    room_name = document.getElementById("Add_room_input").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "twitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "twitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}