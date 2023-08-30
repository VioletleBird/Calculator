'use strict';

const display = document.getElementById('display');
let firstNumber = 0;
let secondNumber = 0;
let firstNumberDone = false;
let symbol = '';
let solved = false;


function showNumber(n) {
    display.innerHTML = n;
}

function callNumber(n) {
    if (solved) {
        resetCalc();
    }
    
    if (firstNumberDone) {
        secondNumber = (secondNumber * 10) + n;
        showNumber(secondNumber);
    }
    else {
        firstNumber = (firstNumber * 10) + n;
        showNumber(firstNumber);
    }
}

function operation(s) {
    firstNumberDone = true;
    symbol = s;
} 

function resetCalc() {
    firstNumber = 0;
    secondNumber = 0;
    firstNumberDone = false;
    display.innerHTML = '';
    symbol = '';
    solved = false;
}

function solve() {
    let result = 0;
    switch (symbol) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
    }
    solved = true;
    showNumber(result);
}
