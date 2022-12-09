var number_cake = 0;
var multiple_cake = 1;
var audio = new Audio('heheheha.mp3');

var number_incr = document.getElementById("num");
var number_cui = document.getElementById("cuiss");
var buy_four = document.getElementById("four");

function x() {
    number_cake = number_cake + multiple_cake;
    number_incr.innerHTML = number_cake;

    if (number_cake >= 25) {
        buy_four.disabled = false;
    }
    else {
        buy_four.disabled = true;
    }
}

function y() {
    multiple_cake += 1;
    number_cake -= 25;
    number_incr.innerHTML = number_cake;
    audio.play();
    if (number_cake >= 25) {
        buy_four.disabled = false;
    }
    else {
        buy_four.disabled = true;
    }
}



