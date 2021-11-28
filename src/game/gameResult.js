const checkStrikeCount = (computerInputNumbers, userInputNumbers) => {
  return userInputNumbers.reduce((count, cur, index) => {
    if (cur === computerInputNumbers[index]) count += 1;
    return count;
  }, 0);
};

const checkBallCount = (computerInputNumbers, userInputNumbers) => {
  return userInputNumbers.reduce((count, cur, index) => {
    if (
      cur !== computerInputNumbers[index] &&
      computerInputNumbers.includes(cur)
    )
      count += 1;

    return count;
  }, 0);
};

const numberToArray = (number) =>
  number
    .toString()
    .split("")
    .map((value) => parseInt(value, 10));

const getGameResultText = (strikeCount, ballCount) => {
  if (ballCount === 0 && strikeCount === 0) return "낫싱";
  if (ballCount === 0 && strikeCount === 3) return "정답";
  if (ballCount === 0) return `${strikeCount}스트라이크`;
  if (strikeCount === 0) return `${ballCount}볼`;

  return `${ballCount}볼 ${strikeCount}스트라이크`;
};

const gameResult = (computerInputNumbers, userInputNumbers) => {
  computerInputNumbers = numberToArray(computerInputNumbers);
  userInputNumbers = numberToArray(userInputNumbers);

  const strikeCount = checkStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = checkBallCount(computerInputNumbers, userInputNumbers);

  return getGameResultText(strikeCount, ballCount);
};

export default gameResult;
