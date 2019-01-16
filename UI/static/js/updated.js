function updated(){
    if(document.getElementById('resolved').checked==true){
        document.getElementById('status').innerHTML='Resolved';
        document.getElementById('status').style.color='green';
    }else if(document.getElementById('investigation').checked==true){
        document.getElementById('status').innerHTML='Under Investigation';
        document.getElementById('status').style.color='yellow';
    }else if(document.getElementById('rejected').checked==true){
            document.getElementById('status').innerHTML='Rejected';
            document.getElementById('status').style.color='red';
    }
    document.getElementById("status").style.fontWeight="bolder";
    document.getElementById("section3").innerHTML="<p id='feedback'>Action Successful!</p>";
    document.getElementById("status-row").style.background="skyBlue";
}
