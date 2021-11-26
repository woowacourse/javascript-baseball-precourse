const countBall = (computerAnswer, userAnswer) => {
  let ball = 0;
  computerAnswer.split("").forEach((number) => {
    if (userAnswer.includes(number)) ball++;
  });
  return ball;
};

const countStrike = (computerAnswer, userAnswer) => {
  let strike = 0;
  for (let i = 0; i < 3; i++) {
    if (computerAnswer[i] === userAnswer[i]) strike++;
  }

  return strike;
};

export default function compareAnswers(computerAnswer, userAnswer) {
  const strike = countStrike(computerAnswer, userAnswer);
  const ball = countBall(computerAnswer, userAnswer) - strike;

  if (ball + strike === 0) return `낫싱`;
  if (strike === 3) return `정답`;
  if (ball === 0) return `${strike}스트라이크`;
  if (strike === 0) return `${ball}볼`;
  else return `${ball}볼 ${strike}스트라이크`;
}
