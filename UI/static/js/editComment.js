function editComment(){
    document.getElementById("comment").innerHTML = "<input id='commentin' type='text' value='Patients charged for ARVs in Arua Hospital' style='width:100%'>";
    document.getElementById("commentin").style.background = "gold";
    document.getElementById("section3").innerHTML = "<button id='comment' class='edit' onclick='confirmComment()' style='margin-left:1%'>Update Comment</button>";
}
