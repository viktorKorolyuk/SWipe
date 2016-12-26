/**
 * Made by Viktor Korolyuk.
 * Copyright blahblahblah,... viktor add info here.
 */
var gh = GameHandle;
var top_b = document.getElementById("top");
var bottom = document.getElementById("bottom");
var butint = document.getElementById("gameres");
var scoreElem = document.getElementById("score");
var subject = document.getElementById("subject");
var score = 0;
var timewait = 0.01;
var timerValue = 30;
var started = false;
var gameLoop; //setting an empty variable to represent the gameloop lateron.
var colors = [
    "rgb(255, 237, 102)",
    "rgb(186, 218, 85)",
    "rgb(75, 204, 220)"
];
var colorsc = {
    38: "",
    40: ""
};

function startgame() {
    if (started == false) {
        butint.innerHTML = "Stop Game.";
        gameLoop = setInterval(function () {
            var x = document.getElementsByClassName("timer");
            timerValue -= timewait;
            x[0].style.width = `${timerValue}%`;
            x[1].style.width = `${timerValue}%`;
            if (timerValue < 0) {
                gh.loose();
            }
        }, 0.1);
        started = true;
    } else {
        gh.loose();
    }
}

//Setting up the listeners.
document.onkeyup = function (e) {
    console.log(e.keyCode);
    if (colorsc[e.keyCode] === undefined) return;
    gh.check(e.keyCode);
};
top_b.onclick = function () {
    if (!started) startgame();
    gh.check(38);
};
bottom.onclick = function () {
    if (!started) startgame();
    gh.check(40);
};
//when this code is loaded, run randomize to make sure its always "random"... hehehe... small jokes are always funny.
gh.randomize();
