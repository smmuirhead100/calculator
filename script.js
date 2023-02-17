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

function displayIt(text) {
    return console.log(text.textContent)
}

const ones = document.querySelector('one');
console.log(ones.textContent);




