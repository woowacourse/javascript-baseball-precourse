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

const gameResult = (computerInputNumbers, userInputNumbers) => {
  computerInputNumbers = numberToArray(computerInputNumbers);
  userInputNumbers = numberToArray(userInputNumbers);

  const strikeCount = checkStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = checkBallCount(computerInputNumbers, userInputNumbers);

  console.log(strikeCount, ballCount);
};

export default gameResult;
