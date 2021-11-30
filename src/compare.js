import { TEXT } from './constants.js';

//count strike function
function countStrike(answer, userInput) {
  const result = [];
  
  answer.map((value, index) => {
    if (value === userInput[index]) result.push(value);
  });

  const string = result.length === 3 ? isCorrectAll() : `${result.length}${TEXT.STRIKE}`;

  return string;
}

//count ball function
function countBall(answer, userInput) {

}

//is it nothing
function isNothing(answer, userInput) {

}

//is it all correct
function isCorrectAll() {
  return TEXT.CORRECT;
}

export function checkAnswer(answer, userInput) {
  return countStrike(['1', '3', '3'], ['1', '2', '3']);
}