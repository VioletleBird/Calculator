'use strict';

const display = document.getElementById('display');
const displaySymbol = document.getElementById('symbol');
let firstNumber = '';
let secondNumber = '';
let firstNumberDone = false;
let symbol = '';
let solved = false;
let invalidState = false;

function showNumber(n) {
    display.innerHTML = n;
}

function showSymbol(s) {
    displaySymbol.innerHTML = s;
}

function callNumber(n) {
    if (invalidState) {
        return;
    }
    
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
    if (invalidState) {
        return;
    }

    if (solved) {
        resetCalc();
    }

    if (firstNumber.length === 0 && s === '-') {
        firstNumber = s;
        showNumber(firstNumber);
    }
    else {
        if (!validate(firstNumber)){
            return;
        }

        firstNumberDone = true;
        symbol = s;
        showSymbol(symbol);
    }
} 

function resetCalc() {
    firstNumber = '';
    secondNumber = '';
    firstNumberDone = false;
    symbol = '';
    solved = false;
    display.innerHTML = '';
    displaySymbol.innerHTML = '';
    invalidState = false;
}

function _del(num) {
    if (num.length !== 0) {
        num.slice(0, -1);
    }
    showNumber(num);
}

function del() {
    if (invalidState) {
        return;
    }

    if (firstNumberDone) {        
        _del(secondNumber);
    }
    else {
        _del(firstNumber);
    }   
}

function solve() {
    if (invalidState) {
        return;
    }

    if (validate(firstNumber) === false || validate(secondNumber) === false){
        return;
    }

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

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
    result.toFixed(6);
    solved = true;
    showNumber(result);
}

function validate(num) {
    if (isNaN(num)) {
        showNumber('Put a valid number!');
        invalidState = true;
        return false;
    }
    return true;
}
