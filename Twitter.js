function Login() {
    Username = document.getElementById("user_name_input");
    localStorage.setItem("Username", Username);
    if (document.getElementById("user_name_input").value != "") {
        window.location = "Twitter_room.html";
    }
}