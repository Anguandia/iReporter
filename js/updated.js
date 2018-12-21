function updated(){
    document.getElementById('status').innerHTML=document.getElementsByClassName("radio").checked.name;
    document.getElementById('status').style.color='gold';
    document.getElementById("section3").innerHTML="<p id='feedback'>Action Successful!</p>";
}
