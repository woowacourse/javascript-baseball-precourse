import { $result } from './constants.js';

function countStrike(answer, userInput) {
  const result = [];
  
  answer.map((value, index) => {
    if (value === userInput[index]) result.push(value);
  });

  const string = `${result.length}스트라이크`;

  return string;
}

function countBall(answer, userInput) {

}

function isNothing(answer, userInput) {

}

function isCorrectAll(answer, userInput) {

  
}

export function checkAnswer(answer, userInput) {
  return countStrike(['1', '3', '2'], ['1', '3', '2']);
}