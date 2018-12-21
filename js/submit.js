function submit(){
    document.getElementsByTagName('article').innerHTML='You have successfully signedup please login and explore';
    setTimeout(
        function login(){
            document.getElementsByTagName('article').innerHTML='login.html';
        }, 3000);
}
