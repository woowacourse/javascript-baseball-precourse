import { TEXT } from './constants.js';

//count strike function
function countStrike(answer, userInput) {
  const strike = [];
  
  userInput.map((value, index) => {
    if (value === answer[index]) strike.push(value);
  });

  return strike;
}

//count ball function
function countBall(strike, answer, userInput) {
  const ball = [];

  userInput.map((value) => {
    if (!strike.includes(value) && answer.includes(value)) {
      ball.push(value);
    } 
  });

  return ball;
}

//is it nothing
function isNothing() {
  return TEXT.NOTHING;
}

//is it all correct
function isCorrectAll() {
  return TEXT.CORRECT;
}

//return total result
export function checkAnswer(answer, userInput) {
  const strike = countStrike(answer, userInput);
  const ball = countBall(strike, answer, userInput);

  return `${strike.length} ${ball.length}`;
}