export default function returnBallStrike(ball, strike) {
  if (ball == 0 && strike == 0) {
    return '낫싱';
  } else if (ball !== 0 && strike == 0) {
    return `${ball}볼`;
  } else if (ball == 0 && strike !== 0) {
    return `${strike}스트라이크`;
  } else {
    return `${ball}볼 ${strike}스트라이크`;
  }
}
