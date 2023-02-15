"use strict";

//Global variables
const userNumberInput = document.querySelector('.js__user_number_input');
const btn = document.querySelector('.js__button');
const btnReset = document.querySelector('.js__button_reset');
const clueParagraph = document.querySelector('.js__clue_paragraph');
const counterTries = document.querySelector('.js__counter_tries');


//Counters & random number
let counter = 0;
const randomNumber = getRandomNumber(100);
console.log(getRandomNumber(100));

//Functions
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max + 1);
}

function attemptsCounter() {
    counter++
    counterTries.innerHTML = counter;
}
function writeClueText(msj) {
    clueParagraph.innerHTML = msj;
}

function compareNumber() {
    const userNumber = parseInt(userNumberInput.value);
    attemptsCounter();
    if (isNaN(userNumber)) {
        writeClueText('Debe introducir un numero');
    } else if (userNumber < 1 || userNumber > 100) {
        writeClueText('El número debe estar entre 1 y 100 :(');
    } else if (userNumber > randomNumber) {
        writeClueText('El número es demasiado alto');
    } else if (userNumber < randomNumber) {
        writeClueText('El número es demasiado bajo');
    } else {
        writeClueText('!!Has ganado campeona!!');
    }
};


function handleClickButton(event) {
    // event.keyCode == 13;
    event.preventDefault();
    compareNumber();
}

function handleClickButtonReset(event) {
    event.preventDefault();
}

//Events
btn.addEventListener('click', handleClickButton);
btnReset.addEventListener('submit', handleClickButtonReset);
