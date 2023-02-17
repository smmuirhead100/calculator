function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}

function displayIt(yes) {
    console.log(yes);
}

const buttons = document.querySelectorAll('button');

for (i = 0; i < buttons.length; i ++) {
    buttons[i].addEventListener("click", function (e) {
        console.log(e);
    });
}