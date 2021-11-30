import { TEXT } from './constants.js';

//count strike function
function countStrike(answer, userInput) {
  const result = [];
  
  answer.map((value, index) => {
    if (value === userInput[index]) result.push(value);
  });

  return result.length;
}

//count ball function
function countBall(answer, userInput) {

}

//is it nothing
function isNothing() {
  return TEXT.NOTHING;
}

//is it all correct
function isCorrectAll() {
  return TEXT.CORRECT;
}

export function checkAnswer(answer, userInput) {
  return countStrike(answer, userInput);
  
}