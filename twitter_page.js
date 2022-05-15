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

function getData() {
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
}

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}