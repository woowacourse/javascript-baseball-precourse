const countStrike = (computerInputNumbers, userInputNumbers) => {
  return computerInputNumbers.reduce((acc, num, i) => {
    if (num === userInputNumbers[i]) {
      acc += 1;
    }
    return acc;
  }, 0);
};

const countBall = (computerInputNumbers, userInputNumbers) => {
  return computerInputNumbers.reduce((acc, num, i) => {
    // eslint-disable-next-line prettier/prettier
    if ((userInputNumbers.indexOf(num) !== i) && (userInputNumbers.indexOf(num) !== -1)) {
      acc += 1;
    }
    return acc;
  }, 0);
};

const getCount = (computerInputNumbers, userInputNumbers) => {
  const strike = countStrike(computerInputNumbers, userInputNumbers);
  const ball = countBall(computerInputNumbers, userInputNumbers);

  return [strike, ball];
};

const getResult = (computerInputNumbers, userInputNumbers) => {
  const [strike, ball] = getCount(computerInputNumbers, userInputNumbers);
  if (strike === 3) {
    return '정답';
  }
  if (!strike && !ball) {
    return '낫싱';
  }

  return `${ball ? ball + '볼 ' : ''}${strike ? strike + '스트라이크' : ''}`;
};

export default getResult;
