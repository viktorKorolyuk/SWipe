//custom game handler class to ease development
//I am using an MDN recomended format of coding, in which I define the methods externaly to make it easier to read. I personaly do not like this method as it increases the length of the page, but alas, if I don't...
function GameHandle() {}

GameHandle.prototype.loose = function () {
    alert(`You have lost with a score of : ${score}. Stopping game.`);
    score = 0;
    timewait = 0.01;
    timerValue = 30;
    clearInterval(gameLoop);
    started = false;
    butint.innerHTML = "Start Game.";
    scoreElem.innerHTML = `Score: ${score}`;
}

GameHandle.prototype.check = function (key) {
    if (colorsc[key] === subject.style.backgroundColor) {
        score++;
        this.randomize();
        timerValue = timerValue * 1.15 + 1; //add a bit to the timerValue
        timewait = timewait + 0.0005;
        if (timerValue >= 30) timerValue = 30;
        scoreElem.innerHTML = `Score: ${score}`;
    } else {
        this.loose();
    }
}

//setting the randomize function up for later use.
//The methods do not require inputs because the variables are global in code.js.
GameHandle.prototype.randomize = function () {
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
}
