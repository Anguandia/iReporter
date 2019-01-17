function deleteRecord(){
    document.getElementById("section3").innerHTML = '<button id="delete" onclick="done()">Confirm Deletion?</button>';
    document.getElementById("delete").style.background = "yellow";
    document.getElementById("delete").style.color = "red";
}
