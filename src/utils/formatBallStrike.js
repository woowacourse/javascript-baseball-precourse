function formatBallStrike(ball, strike) {
  let result = '';
  if (ball) result += `${ball}볼 `;
  if (strike) result += `${strike}스트라이크`;

  return result;
}

export default formatBallStrike;
