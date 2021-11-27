const getResultState = ({ balls, strikes, isGameClear }) => {
  const resultState = {
    balls,
    strikes,
    resultText: `${balls}볼 ${strikes}스트라이크`,
    isGameClear,
  };

  if (balls === 0 && strikes === 0) {
    resultState.resultText = `낫싱`;
    return resultState;
  }
  if (balls === 0) {
    resultState.resultText = `${strikes}스트라이크`;
    return resultState;
  }
  if (strikes === 0) {
    resultState.resultText = `${balls}볼`;
    return resultState;
  }

  return resultState;
};

const getGameResult = (computerInputNumbers, userInputNumbers) => {
  const isGameClear = computerInputNumbers === userInputNumbers;
  const computerInputNumbersArr = String(computerInputNumbers).split("");
  const userInputNumbersArr = String(userInputNumbers).split("");
  let balls = 0;
  let strikes = 0;

  for (let i = 0; i < userInputNumbersArr.length; i++) {
    if (userInputNumbersArr[i] === computerInputNumbersArr[i]) {
      strikes++;
      continue;
    }
    if (computerInputNumbersArr.includes(userInputNumbersArr[i])) {
      balls++;
    }
  }

  return getResultState({ balls, strikes, isGameClear });
};

export default getGameResult;
