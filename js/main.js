"use strict";

//Global variables
const userNumberinput = document.querySelector('.js__user_number');
const btn = document.querySelector('.js__button');
const clue = document.querySelector('.js__clue');
const textCounter = document.querySelector('.js__counter');


//Counters
let counter = 0;


//Functions
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max + 1);
}

function attemptsCounter() {
    counter++
    textCounter.innerHTML = `Número de intentos: ${counter}`;

}

//comparacion de numeros
function compareNumber() {
    const randomNumber = getRandomNumber(100);
    const userNumber = parseInt(userNumberinput.value);
    if (userNumber === randomNumber) {
        clue.innerHTML = 'Has ganado campeona!!';
    } else if (userNumber < 1 || userNumber > 100) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
        attemptsCounter();
    } else if (userNumber > randomNumber) {
        clue.innerHTML = 'Demasiado alto';
        attemptsCounter();
    } else if (userNumber < randomNumber) {
        clue.innerHTML = 'Demasiado bajo';
        attemptsCounter();
    }
}


function handleClickButton(event) {
    event.preventDefault();
    compareNumber();
}


//Events
btn.addEventListener('click', handleClickButton);
