/*
 * Name: code.js
 * Task: set up SWipe game
 */

//Creating new object with prototype of GameHandle
var gh = Object.create(GameHandle);

var top_b = document.getElementById("top");

var bottom = document.getElementById("bottom");

var butint = document.getElementById("gameres");

var scoreElem = document.getElementById("score");

var subject = document.getElementById("subject");

var score = 0;

var timewait = 0.01;

var timerValue = 30;

var started = false;

 //setting an empty variable to represent the gameloop lateron.
var gameLoop;

// Array of all progress bars
var timers = document.getElementsByClassName("timer");
var colors = [
  "rgb(255, 237, 102)",
  "rgb(76, 173, 214)",
  "rgb(245, 40, 55)"
];

var colorsc = {
  38: "",
  40: ""
};

function startgame() {
  if (!started) {
    butint.innerHTML = "Stop Game.";
    gameLoop = setInterval(function() {
      timerValue -= timewait;
      timers[0].style.width = `${timerValue}%`;
      timers[1].style.width = `${timerValue}%`;
      if (timerValue < 0) {
        gh.loose();
      }
    }, 0.1);
    started = true;
  } else {
    // If the user stops early, they lost
    gh.loose();
  }
}

// Setting up the listeners.
document.onkeyup = function(e) {

  // Check if the keycode is supported
  if (!colorsc[e.keyCode]) return;
  if(!started){
    startgame();
  }
  gh.check(e.keyCode);
};
top_b.onclick = function() {
  if (!started) startgame();
  gh.check(38);
};
bottom.onclick = function() {
  if (!started) startgame();
  gh.check(40);
};

// When this code is loaded, run randomize to make sure its always "random"... hehehe... small jokes are always funny.
// EDIT: 2017-06-15; I don't get the joke. How was that funny?
gh.randomize();
