const checkStrike = (computerInputNumbers, userInputNumbers) => {
  let result = 0;
  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) result += 1;
  }
  return result;
};

const checkBall = (computerInputNumbers, userInputNumbers, strikeCount) => {
  const computerInputSet = new Set(computerInputNumbers);
  const userInputSet = new Set(userInputNumbers);
  const totalBallCount = [...computerInputSet].reduce((res, num) => {
    res += userInputSet.has(num) && 1;
    return res;
  }, 0);
  return totalBallCount - strikeCount;
};

const getResultText = (strikeCount, ballCount) => {
  if (strikeCount && ballCount)
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  if (strikeCount) return `${strikeCount}스트라이크`;
  if (ballCount) return `${ballCount}볼`;
  return "낫싱";
};

export const checkResult = (computerInputNumbers, userInputNumbers) => {
  const strikeCount = checkStrike(computerInputNumbers, userInputNumbers);
  const ballCount = checkBall(
    computerInputNumbers,
    userInputNumbers,
    strikeCount
  );
  const res = getResultText(strikeCount, ballCount);
  return res;
};
