var GameHandle = {}

GameHandle.loose = function () {
    alert(`You have lost with a score of : ${score}. Stopping game.`);
    score = 0;
    timewait = 0.01;
    timerValue = 30;
    clearInterval(gameLoop);
    started = false;
    butint.innerHTML = "Start Game.";
    scoreElem.innerHTML = `Score: ${score}`;
}

GameHandle.check = function (key) {
    if (!started) return;
    if (colorsc[key] === subject.style.backgroundColor) {
        score++;
        this.randomize();
        // Add a bit to the timerValue
        timerValue = timerValue * 1.15 + 1;
        timewait = timewait + 0.0005;
        if (timerValue >= 30) timerValue = 30;
        scoreElem.innerHTML = `Score: ${score}`;
    } else {
        this.loose();
    }
}

// Setting the randomize function up for later use.
// The methods do not require inputs because the variables are global in code.js.
GameHandle.randomize = function () {
    var wheight = colors[Math.floor(Math.random() * colors.length)];
    var wheight2 = colors[Math.floor(Math.random() * colors.length)];
    var opt = [];
    opt.push(wheight);
    opt.push(wheight2);
    while (wheight2 === wheight) {
        wheight2 = colors[Math.floor(Math.random() * colors.length)]; // Make sure the value is never the same as the first one.
    }
    colorsc[38] = wheight;
    colorsc[40] = wheight2;
    top_b.style.backgroundColor = colorsc[38];
    bottom.style.backgroundColor = colorsc[40];
    subject.style.backgroundColor = opt[Math.floor(Math.random() * opt.length)];
}

// A bot to run the game whilist I am too lazy to play.
GameHandle.bot = function () {
    setInterval(function () {
        if (subject.style.backgroundColor === top_b.style.backgroundColor) {
            gh.check(38);
        } else if (subject.style.backgroundColor === bottom.style.backgroundColor) {
            gh.check(40);
        }
    }, 1);
}
