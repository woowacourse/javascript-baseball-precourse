const getScoreState = (balls, strikes) => {
  const scoreState = {
    balls,
    strikes,
    resultText: `${balls}볼 ${strikes}스트라이크`,
    isSuccess: false,
  };

  if (strikes === 3) {
    scoreState.resultText = `3스트라이크`;
    scoreState.isSuccess = true;
    return scoreState;
  }
  if (balls === 0 && strikes === 0) {
    scoreState.resultText = `낫싱`;
    return scoreState;
  }
  if (balls === 0) scoreState.resultText = `${strikes}스트라이크`;
  if (strikes === 0) scoreState.resultText = `${balls}볼`;

  return scoreState;
};

const getScore = (computerInputNumbers, userInputNumbers) => {
  const _computerInputNumbers = String(computerInputNumbers).split("");
  const _userInputNumbers = String(userInputNumbers).split("");
  let balls = 0;
  let strikes = 0;

  if (computerInputNumbers === userInputNumbers) {
    return getScoreState(0, 3);
  }

  for (let i = 0; i < _userInputNumbers.length; i++) {
    if (_userInputNumbers[i] === _computerInputNumbers[i]) {
      strikes++;
      continue;
    }
    if (_computerInputNumbers.includes(_userInputNumbers[i])) {
      balls++;
    }
  }

  return getScoreState(balls, strikes);
};

export default getScore;
