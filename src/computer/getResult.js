
export default function getResult(answer, userInput) {
  console.log(answer, userInput);
  const strike = countStrike(answer, userInput);
  const ball = countBall(answer, userInput);

  console.log(`${ball}볼 ${strike}스트라이크`);
}

const countBall = (answer, userInput) => {
  let ball = 0;
  answer.split("").forEach((el, idx) => {
    if(userInput.includes(el) && userInput[idx] !== el){
      ball++;
    }
  })

  return ball;
}

const countStrike = (answer, userInput) => {
  let strike = 0;
  answer.split("").forEach((el, idx) => {
    if(el === userInput[idx]){
      strike++;
    }
  })

  return strike;
}