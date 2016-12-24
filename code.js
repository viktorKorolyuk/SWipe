var top_b = document.getElementById("top");
var bottom = document.getElementById("bottom");
var subject = document.getElementById("subject");
var colorsc = {
    38: "",
    40: ""
};
var score = 0;
var colors = ["rgb(255, 237, 102)", "rgb(186, 218, 85)", "rgb(75, 204, 220)"];
var ranTIMES = [2500, 1000, 2000, 5000, 3000, 1000, 5000];
var timewait = 0.01;
var timerValue = 30;

var randomize = function() {
    var wheight = colors[Math.floor(Math.random() * colors.length)];
    var wheight2 = colors[Math.floor(Math.random() * colors.length)];
    var opt = [];
    opt.push(wheight);
    opt.push(wheight2);
    while (wheight2 === wheight) {
        wheight2 = colors[Math.floor(Math.random() * colors.length)]; //make sure the value is never the same as the first one.
    }
    colorsc[38] = wheight;
    colorsc[40] = wheight2;
    top_b.style.backgroundColor = colorsc[38];
    bottom.style.backgroundColor = colorsc[40];
    subject.style.backgroundColor = opt[Math.floor(Math.random() * opt.length)];
};

var check = function(key) {
    if (colorsc[key] === subject.style.backgroundColor) {
        score++;
        randomize();
        timerValue = timerValue * 1.15 + 1; //add a bit to the timerValue
        timewait = timewait + 0.0005;
        if (timerValue >= 30) timerValue = 30;
    } else {

        alert(`You have lost with a score of : ${score}. Resetting.`);
        score = 0;
        timewait = 0.01;
        timerValue = 30;
    }
    $("#score").text(`Score: ${score}`);
};

randomize();

function hack() {
    setInterval(function() {
        if (subject.style.backgroundColor === top_b.style.backgroundColor) {
            check(38);
        } else if (subject.style.backgroundColor === bottom.style.backgroundColor) {
            check(40);
        }
    }, 1);
    //ranTIMES[Math.floor(Math.random() * ranTIMES.length)]
}



$(document).keyup(function(e) {
    console.log(e.keyCode);
    if (colorsc[e.keyCode] === undefined) return;
    check(e.keyCode);
});
top_b.onclick = function() {
    check(38);
};
bottom.onclick = function() {
    check(40);
};
var started = false;
var game;
var butint = document.getElementById("gameres");
function startgame() {
  if(started == false){
    butint.innerHTML = "Stop Game.";
  game = setInterval(function() {
        var x = document.getElementsByClassName("timer");
        timerValue -= timewait;
        x[0].style.width = `${timerValue}%`;
        x[1].style.width = `${timerValue}%`;
        if (timerValue < 0) {
            alert(`You have lost with a score of : ${score}. Resetting.`);
            timerValue = 30;
            timewait = 0.01;
            score = 0;
            $("#score").text(`Score: ${score}`);
        }
    }, 0.1);
    started = true;
  } else {
    clearInterval(game);
    started = false;
    butint.innerHTML = "Start Game.";
  }
}
