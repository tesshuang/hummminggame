var mregister = document.getElementById('register'),
    usrInput = document.getElementById('usrInput');


mregister.addEventListener('click', function(){
    if(usrInput.value !== ""){
        var uname = usrInput.value;
        var fd = new FormData();
        fd.append("username", uname);
        fetch("http://localhost:8888/gamephp.php",{
            method:"POST",
            body:fd
        });
    }
    
    localStorage.setItem('cusername', JSON.stringify(uname));
    changeView();
    
    console.log(uname);
    
});

function changeView(){
    if(usrInput.value !== ""){
        location.href = "lab02.html";
    }else{
        alert("Please enter your name.");
    }
}
