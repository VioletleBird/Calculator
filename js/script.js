'use strict';

const display = document.getElementById('display');
const displaySymbol = document.getElementById('symbol');
let firstNumber = '';
let secondNumber = '';
let firstNumberDone = false;
let symbol = '';
let solved = false;


function showNumber(n) {
    display.innerHTML = n;
}

function showSymbol(s) {
    displaySymbol.innerHTML = s;
}

function callNumber(n) {
    if (solved) {
        resetCalc();
    }
    
    if (firstNumberDone) {
        secondNumber = secondNumber + n;
        showNumber(secondNumber);
        showSymbol('');
    }
    else {
        firstNumber = firstNumber + n;
        showNumber(firstNumber);
    }
}

function operation(s) {
    firstNumberDone = true;
    symbol = s;
    showSymbol(symbol);
} 

function resetCalc() {
    firstNumber = '';
    secondNumber = '';
    firstNumberDone = false;
    symbol = '';
    solved = false;
    display.innerHTML = '';
    displaySymbol.innerHTML = '';
}

function solve() {
    let result = 0;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

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
    result.toFixed(6);
    solved = true;
    showNumber(result);
}
