'use strict';
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let guessingNumber = function () {
  let correctAnswer = Math.ceil(Math.random() * 100);
  let startGame = confirm('Угадай число от 1 до 100');
  let userAnswer;

  let attempt = function() {
    userAnswer = prompt('Введи число');
    if (userAnswer !== null) {
      if (!isNumber(userAnswer)) {
        alert('Введи число!');
        attempt();
      } else if (+userAnswer === correctAnswer) {
        alert('Верно!');
        startGame = confirm('Угадай число от 1 до 100');
        if (startGame) {
          correctAnswer = Math.ceil(Math.random() * 100);
          attempt();
        }
      } else if (+userAnswer > correctAnswer) {
        alert('Загаданное число меньше');
        attempt();
      } else {
        alert('Загаданное число больше');
        attempt();
      }
    }
  };
  if (startGame) {
    attempt();
  }
};

guessingNumber();