import { TEXT } from './constants.js';

//count strike function
function countStrike(answer, userInput) {
  const strike = [];
  
  userInput.map((value, index) => {
    if (value === answer[index]) strike.push(value);
  });

  return strike.length === 3 ? isCorrectAll() : strike;
}

//count ball function
function countBall(strike, answer, userInput) {
  const ball = [];

  if(strike !== 3) {
    userInput.map((value) => {
      if (!strike.includes(value) && answer.includes(value)) {
        ball.push(value);
      } 
    });  
  }

  return ball;
}

//is it all correct
function isCorrectAll() {
  return 3;
}


//return result total
//totalResult = [Strike, Ball] -> ${Strike}스트라이크${Ball}볼
export function checkAnswer(answer, userInput) {
  const totalResult = [];
  const strike = countStrike(answer, userInput);
  const ball = countBall(strike, answer, userInput);
  
  totalResult.push(strike, ball);

  return totalResult;
}