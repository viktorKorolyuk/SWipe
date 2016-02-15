var game = document.getElementById("game");
var scar = document.getElementById("scar");
var main = document.getElementById("mainBLOCK");
var bb = document.getElementById("bb");
var ba = document.getElementById("ba");
var upKEY = null;
var dwnKEY = null;
var time;
var seconds = 0;
var randAns = [1, 2];
var score = 0;
var d = new Date();
var orientation = ["1,2","2,1"];
var show = true;
var starttime = new Date().getTime();
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
function gameLoop() {
    window.onkeydown = function (e) {
        if (e.keyCode == "38") {
            upKEY = true;
            dwnKEY = false;
            //  console.log("pressed up key: " + dwnKEY);
            //  doAnim("up");
        } else if (e.keyCode == "40") {
            upKEY = false;
            dwnKEY = true;
            // console.log("pressed down key: " + dwnKEY);
            //   doAnim("down");
        }
    };
    if (dwnKEY === true && main.style.backgroundColor === "rgb(186, 218, 85)" && bb.style.backgroundColor === "rgb(186, 218, 85)") { //down key with green color and green color
        win();
    } else if (dwnKEY === true && main.style.backgroundColor === "rgb(186, 218, 85)" && bb.style.backgroundColor === "rgb(255, 102, 102)") { //down key with green color and red color
        loose();
    } else if (dwnKEY === true && main.style.backgroundColor === "rgb(255, 102, 102)" && bb.style.backgroundColor === "rgb(255, 102, 102)") { //down key with green color and red color
        win();
    } else if (dwnKEY === true && main.style.backgroundColor === "rgb(255, 102, 102)" && bb.style.backgroundColor === "rgb(186, 218, 85)") { //down key with green color and red color
        loose();
    }
    else if (upKEY === true && main.style.backgroundColor === "rgb(255, 102, 102)" && ba.style.backgroundColor === "rgb(255, 102, 102)") {
        win();
    } else if (upKEY === true && main.style.backgroundColor === "rgb(255, 102, 102)" && ba.style.backgroundColor === "rgb(186, 218, 85)") {
        loose();
    }else if (upKEY === true && main.style.backgroundColor === "rgb(255, 102, 102)" && ba.style.backgroundColor === "rgb(186, 218, 85)") {
        loose();
    } else if (upKEY === true && main.style.backgroundColor === "rgb(186, 218, 85)" && ba.style.backgroundColor === "rgb(186, 218, 85)") {
        win();
    }
}

function win() {
    score += 1;
    scar.innerHTML = score;
    upKEY = null;
    dwnKEY = null;
    delay = 20;
    randAns = [1, 2];
    //now to reset the game
    randomChoice();
}

function loose() {
  var seconds = new Date().getTime() - starttime;
    if(show){
    alert("You played for " + seconds + " seconds. Also you have a " + (score / (seconds * 1000)) +" blocks/sec");
    show = false;
    }
    location.reload();
}

setInterval(function () {
    gameLoop();
}, 100);
randomChoice();
