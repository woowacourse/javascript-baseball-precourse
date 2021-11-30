// count strike function
function countStrike(answer, userInput) {
  const strike = [];

  userInput.forEach((value, index) => {
    if (value === answer[index]) {
      strike.push(value);
    }
  });

  return strike;
}

// count ball function
function countBall(strike, answer, userInput) {
  const ball = [];

  if (strike.length !== 3) {
    userInput.forEach(value => {
      if (!strike.includes(value) && answer.includes(value)) {
        ball.push(value);
      }
    });
  }

  return ball;
}

// return result total
// totalResult = [Strike, Ball] -> ${Strike}스트라이크${Ball}볼
export function checkAnswer(answer, userInput) {
  const totalResult = [];
  const strike = countStrike(answer, userInput);
  const ball = countBall(strike, answer, userInput);

  totalResult.push(strike.length, ball.length);

  return totalResult;
}
