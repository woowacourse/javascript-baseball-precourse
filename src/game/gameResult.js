const checkStrikeCount = (computerInputNumbers, userInputNumbers) => {
  return userInputNumbers.reduce((acc, cur, index) => {
    if (cur === computerInputNumbers[index]) acc += 1;
    return acc;
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
};

export default gameResult;
