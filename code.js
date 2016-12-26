/**
 * Made by Viktor Korolyuk.
 * Copyright blahblahblah,... viktor add info here.
 */

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
                loose();
            }
        }, 0.1);
        started = true;
    } else {
        loose();
    }
}
//boolean logic checking if the key pressed is the one the game needs, but not the one is deserves.
var check = function (key) {
    if (colorsc[key] === subject.style.backgroundColor) {
        score++;
        randomize();
        timerValue = timerValue * 1.15 + 1; //add a bit to the timerValue
        timewait = timewait + 0.0005;
        if (timerValue >= 30) timerValue = 30;
        scoreElem.innerHTML = `Score: ${score}`;
    } else {
        loose();
    }

};
//a function to stop code repetition
var loose = function () {
    alert(`You have lost with a score of : ${score}. Resetting.`);
    score = 0;
    timewait = 0.01;
    timerValue = 30;
    clearInterval(gameLoop);
    started = false;
    butint.innerHTML = "Start Game.";
    scoreElem.innerHTML = `Score: ${score}`;
};

//a bot to run the game whilist I am too lazy.
var hack = function () {
    setInterval(function () {
        if (subject.style.backgroundColor === top_b.style.backgroundColor) {
            check(38);
        } else if (subject.style.backgroundColor === bottom.style.backgroundColor) {
            check(40);
        }
    }, 1);
}

//setting the randomize function up for later use.
var randomize = function () {
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


//Setting up the listeners.
document.onkeyup = function (e) {
    console.log(e.keyCode);
    if (colorsc[e.keyCode] === undefined) return;
    check(e.keyCode);
};
top_b.onclick = function () {
    check(38);
};
bottom.onclick = function () {
    check(40);
};
//when this code is loaded, run randomize to make sure its always "random"... hehehe... small jokes are always funny.
randomize();
