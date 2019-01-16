function changeName(){
    document.getElementById("useName").innerHTML = document.getElementById("newname").value;
    document.getElementById("useName").style.background = "grey";
    document.getElementById("section3").innerHTML = "<p id='feedback'>Comment Successfully Updated!</p>";
}
