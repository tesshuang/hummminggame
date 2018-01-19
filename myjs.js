var rbtn = document.getElementById('rbtn'),
    usrpoints = document.getElementById('usrpoints');
var mtop, mleft;    
var clickSwitch = false,
    clicktimes = 0,
    pointcheck = false;

var cuser = localStorage.getItem("cusername");
var finalvalue = JSON.parse(cuser);

function timer(){

    var oneMinutes = 60 * 0.5,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display); 
    var abc = 0;
    var innertime = setInterval(function(){
        abc++;
        pointcheck = true;
        if(abc === 30){
            clearInterval(innertime);
            clearInterval(movement);
            rbtn.style.top = "250px";
            rbtn.style.left = "50px";
            pointcheck = false;
        }
    },1000);

    
    var movement = setInterval(function(){

        mtop = Math.floor(Math.random()*500);
        mleft = Math.floor(Math.random()*400);
        rbtn.style.top = mtop+"px";
        rbtn.style.left = mleft+"px";
        console.log(mtop,mleft);
    }
    , 1200);


}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time left:  "+minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(countdown);
            display.textContent = "Time is up.";
            savetoDb();
        }
    }, 1000);

}

function savetoDb(){
    var usrscore = clicktimes;
    var fd = new FormData();
        fd.append("usrscore", usrscore);
        fd.append("cusrname", finalvalue);
    fetch("http://localhost:8888/gamesavescore.php",{
        method:"POST",
        body:fd
    });
}

function newBackground(){

        rbtn.style.backgroundImage = "url('01.svg')";

        setTimeout(function(){
            rbtn.style.backgroundImage = "url('02.svg')";
        },200);
        
}

rbtn.addEventListener("click", function(){
    if(pointcheck === true){
        clicktimes++;
        document.getElementById('upoints').style.visibility ="visible";
        usrpoints.innerHTML = clicktimes;
        newBackground();

    }
});


window.onload = function(){
    fetch("http://localhost:8888/gamehighscore.php",{
        method:"GET"
    }).then((resp)=>{
            return resp.json();
        }).then((json)=>{
            console.log(json);
            var highestscore = json[0].highest;
            document.getElementById('highscore').innerHTML = highestscore;
        });
    document.getElementById('cusername').innerHTML = "Hello "+finalvalue+", ";
}
