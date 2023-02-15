"use strict";

//Global variables
const userNumberInput = document.querySelector('.js__user_number_input');
const btn = document.querySelector('.js__button');
const clueParagraph = document.querySelector('.js__clue_paragraph');
const counterParagraph = document.querySelector('.js__counter_paragraph');


//Counters & random number
let counter = 0;
const randomNumber = getRandomNumber(100);

//Functions
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max + 1);
}

function attemptsCounter() {
    counter++
    counterParagraph.innerHTML = `Número de intentos: ${counter}`;
}

function compareNumber() {
    const userNumber = parseInt(userNumberInput.value);
    if (userNumber === randomNumber) {
        clueParagraph.innerHTML = 'Has ganado campeona!!';
    } else if (userNumber < 1 || userNumber > 100) {
        clueParagraph.innerHTML = 'El número debe estar entre 1 y 100';
        attemptsCounter();
    } else if (userNumber > randomNumber) {
        clueParagraph.innerHTML = 'Demasiado alto';
        attemptsCounter();
    } else if (userNumber < randomNumber) {
        clueParagraph.innerHTML = 'Demasiado bajo';
        attemptsCounter();
    }
}

function handleClickButton(event) {
    event.preventDefault();
    compareNumber();
}

//Event
btn.addEventListener('click', handleClickButton);
