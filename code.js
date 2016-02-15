var game = document.getElementById("game");
var scar = document.getElementById("scar");
var main = document.getElementById("mainBLOCK");
var bb = document.getElementById("bb");
var ba = document.getElementById("ba");
var KEYdir = null;
var time;
var seconds = 0;
var randAns = [1, 2];
var score = 0;
var d = new Date();
var orientation = ["1,2","2,1"];
var show = true;
var starttime;
click=true;
console.log(starttime);
function randomChoice() {
    var rand = randAns[Math.floor(Math.random() * randAns.length)];
    var randOR = orientation[Math.floor(Math.random() * orientation.length)];
    if (rand === 1) {
        main.style.backgroundColor = "rgb(186, 218, 85)";
    } else if (rand === 2) {
        main.style.backgroundColor = "rgb(255, 102, 102)";
    }
    if(randOR === "1,2"){
      document.getElementById("ba").style.backgroundColor = "rgb(255, 102, 102)";
      document.getElementById("bb").style.backgroundColor = "rgb(186, 218, 85)";
    } else if (randOR == "2,1") {
      document.getElementById("bb").style.backgroundColor = "rgb(255, 102, 102)";
      document.getElementById("ba").style.backgroundColor = "rgb(186, 218, 85)";
    }

}
window.onkeydown = function (e) {
  if(click){new Date().getTime();click=false;}
    if (e.keyCode == "38") {
        KEYdir = 1;
    } else if (e.keyCode == "40") {
        KEYdir = 0;

    }
};
function gameLoop() {
    if (KEYdir === 0 && main.style.backgroundColor === "rgb(186, 218, 85)" && bb.style.backgroundColor === "rgb(186, 218, 85)") { //down key with green color and green color
        win();
    } else if (KEYdir === 0 && main.style.backgroundColor === "rgb(186, 218, 85)" && bb.style.backgroundColor === "rgb(255, 102, 102)") { //down key with green color and red color
        loose();
    } else if (KEYdir === 0 && main.style.backgroundColor === "rgb(255, 102, 102)" && bb.style.backgroundColor === "rgb(255, 102, 102)") { //down key with green color and red color
        win();
    } else if (KEYdir === 0 && main.style.backgroundColor === "rgb(255, 102, 102)" && bb.style.backgroundColor === "rgb(186, 218, 85)") { //down key with green color and red color
        loose();
    }else if (KEYdir === 1 && main.style.backgroundColor === "rgb(255, 102, 102)" && ba.style.backgroundColor === "rgb(255, 102, 102)") {
        win();
    } else if (KEYdir === 1 && main.style.backgroundColor === "rgb(255, 102, 102)" && ba.style.backgroundColor === "rgb(186, 218, 85)") {
        loose();
    }else if (KEYdir === 1 && main.style.backgroundColor === "rgb(255, 102, 102)" && ba.style.backgroundColor === "rgb(186, 218, 85)") {
        loose();
    } else if (KEYdir === 1 && main.style.backgroundColor === "rgb(186, 218, 85)" && ba.style.backgroundColor === "rgb(186, 218, 85)") {
        win();
    }
}
function win() {
    starttime = null;
    score += 1;
    scar.innerHTML = score;
    KEYdir = null;
    delay = 20;
    randAns = [1, 2];
    randomChoice();
}
function loose() {
  var seconds = new Date().getTime() - starttime;
    if(show){
    alert("You played for " + seconds + " seconds. Also you have a " + (score / (seconds / 1000)) +" blocks/sec");
    show = false;
    }
    location.reload();
}
setInterval(function () {
    gameLoop();
}, 100);
randomChoice();
