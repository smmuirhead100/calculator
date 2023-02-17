const display = document.querySelector('.display');

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
    let items = display.textContent;
    let selected = text;
    items = items + ' ' + selected;
    display.textContent = items;
    console.log(items);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => 
button.addEventListener('click', () => displayIt(button.textContent))
)