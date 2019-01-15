function deleteRecord(){
    document.getElementById("section3").innerHTML = '<button id="edit" onclick="done()">Confirm Deletion?</button>';
    document.getElementById("edit").style.background = "yellow";
    document.getElementById("edit").style.color = "red";
}
