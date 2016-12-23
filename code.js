var top_b = document.getElementById("top");
var bottom = document.getElementById("bottom");
var subject = document.getElementById("subject");
var colorsc = {
    38: "",
    40: ""
};
var score = 0;
var colors = ["rgb(255, 237, 102)", "rgb(186, 218, 85)", "rgb(75, 204, 220)"];

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
        if (r <= 245) {
            r = g = b = Math.floor(b * 1.05) + 1;
        }
    } else {
        score = 0;
        r = g = b = Math.floor(b * 0.5);

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
    }, 100);
}

var r = 245,
    g = 245,
    b = 245;
/**
setInterval(function () {
if (r <= 0) return;
r--;
g--;
b--;
document.body.style.color = `rgb(${245 - r}, ${245 - g}, ${245 - b})`
document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 500);
*/
