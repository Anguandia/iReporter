function updated(){
    if(document.getElementById('resolved').checked==true){
        document.getElementById('status').innerHTML='resolved';
        document.getElementById('status').style.color='green';
    }else{
        document.getElementById('status').innerHTML='rejected';
        document.getElementById('status').style.color='red';
    }
    document.getElementById("section3").innerHTML="<p id='feedback'>Action Successful!</p>";
}
