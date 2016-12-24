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
top_b.onclick = function () {
    check(38);
};
bottom.onclick = function () {
    check(40);
};

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

var check = function (key) {
    if (colorsc[key] === subject.style.backgroundColor) {
        score++;
        randomize();

        timer = timer * 1.15 + 1;
        if (timer >= 30) timer = 30;
    } else {
        score = 0;
        alert("you loose.");

    }
    $("#score").text(`Score: ${score}`);
};


$(document).keyup(function (e) {
    console.log(e.keyCode);
    if (colorsc[e.keyCode] === undefined) return;
    check(e.keyCode);
    //randomize();
});
randomize();

//hack();



function hack() {
    setInterval(function () {
        if (subject.style.backgroundColor === top_b.style.backgroundColor) {
            //  console.log("select up.");
            check(38);
        } else if (subject.style.backgroundColor === bottom.style.backgroundColor) {
            //  console.log("select down.");
            check(40);
        }
    }, ranTIMES[Math.floor(Math.random() * ranTIMES.length)]);
}

var timer = 30;
setInterval(function () {
    var x = document.getElementsByClassName("timer");
    timer -= 0.01;
    x[0].style.width = `${timer}%`;
    x[1].style.width = `${timer}%`;
    if (timer < 0) {
        alert("you loose. reloading page due to developer laziness.");
        timer = 30;
        score = 0;
        $("#score").text(`Score: ${score}`);
    }
}, 0.1);
