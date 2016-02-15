var game = document.getElementById("game");
var scar = document.getElementById("scar");
var main = document.getElementById("mainBLOCK");
var bb = document.getElementById("bb");
var ba = document.getElementById("ba");
var upKEY = null;
var dwnKEY = null;
var x = 0;
var y = 185;
var dx = 5;
var dy = 5;
var time;
var seconds = 0;
var delay = 20;
var randAns = [1, 2];
var score = 0;
var d = new Date();
var orientation = ["1,2","2,1"];
var show = true;
function doAnim(s) {
    y = 185;
    if (s === "up") {
        time = setInterval(function () {
            y -= dy;
            main.style.top = y + "px";
            //  console.log(y);
            if (y <= 20) {
                main.style.top = "30px";
                clearInterval(time);
            }
        }, delay);
    } else if (s === "down") {
        time = setInterval(function () {
            y += dy;
            main.style.top = y;
            if (y >= 325) {
                clearInterval(time);
            }
        }, delay);
    }

}

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
  //  console.log(score + " reseting now :)");
    upKEY = null;
    dwnKEY = null;
    x = 0;
    y = 185;
    dx = 5;
    dy = 5;
    time;
    delay = 20;
    andAns = [1, 2];

    //now to reset the game

    if (main.style.top != 185) {
        main.style.top = 185 + "px";
    }

    randomChoice();
}

function loose() {
    var avg = (score / seconds) * 1;
    console.log(seconds);
    console.log(score);
    console.log(score / seconds);
    if(show = true){
    alert("You played for " + seconds + " seconds. Also you have a " + avg +" blocks/sec");
    show = false;
  }score = 0;
    scar.innerHTML = score;
    console.log("Lost");
    clearInterval(Timer);
    location.reload();
  //  window.reload();
}

setInterval(function () {
    gameLoop();
}, 100);
randomChoice();
var Timer = setInterval(function(){
//  console.log(seconds);
  seconds++;
},1000);
