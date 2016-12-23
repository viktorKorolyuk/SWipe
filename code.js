var top_b = document.getElementById("top");
var bottom = document.getElementById("bottom");
var subject = document.getElementById("subject");
console.log(bottom);
var colorsc = {
    38: "",
    40: ""
};
var score = 0;

var colors = ["rgb(255, 102, 102)", "rgb(186, 218, 85)", "rgb(102, 102, 255)"];
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
        console.log("you got it right!");
        score++;
    } else {
        console.log("you got it wrong.");
        score = 0;

    }
};

$(document).keydown(function (e) {
    console.log(e.keyCode);
    check(e.keyCode);
    randomize();
    $("#score").text(`Score: ${score}`);

});

randomize();
