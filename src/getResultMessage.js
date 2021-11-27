function countStrikeAndBall(computerInputNumbers, userInputNumbers) {
  let strike = 0;
  let ball = 0;

  for (let index = 0; index < computerInputNumbers.length; index++) {
    if (computerInputNumbers[index] === userInputNumbers[index]) {
      strike++;
    } else if (computerInputNumbers.includes(userInputNumbers[index])) {
      ball++;
    }
  }

  return { strike, ball };
}

export default function getResultMessage(computerInputNumbers, userInputNumbers) {
  const { strike, ball } = countStrikeAndBall(computerInputNumbers, userInputNumbers);

  if (strike && ball) {
    return `${ball}볼 ${strike}스트라이크`;
  } else if (strike) {
    return `${strike}스트라이크`;
  } else if (ball) {
    return `${ball}볼`;
  } else {
    return '낫싱';
  }
}
