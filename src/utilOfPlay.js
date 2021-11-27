function countStrike(i, valueOfStrike, computerInputNumbers, userInputNumbers) {
  let value = valueOfStrike;
  if (computerInputNumbers[i] === userInputNumbers[i]) {
    value++;
  }
  return value;
}

function countBall(i, j, valueOfBall, computerInputNumbers, userInputNumbers) {
  let value = valueOfBall;
  if (computerInputNumbers[i] === userInputNumbers[j]) {
    value++;
  }
  return value;
}

function getStrikeNumber(
  ruleRangeNumber,
  computerInputNumbers,
  userInputNumbers
) {
  let valueOfStrike = 0;

  for (let i = 0; i < ruleRangeNumber; i++) {
    valueOfStrike = countStrike(
      i,
      valueOfStrike,
      computerInputNumbers,
      userInputNumbers
    );
  }
  return valueOfStrike;
}

function getBallNumber(
  ruleRangeNumber,
  computerInputNumbers,
  userInputNumbers,
  valueOfStrike
) {
  let valueOfBall = 0;
  for (let i = 0; i < ruleRangeNumber; i++) {
    for (let j = 0; j < ruleRangeNumber; j++) {
      valueOfBall = countBall(
        i,
        j,
        valueOfBall,
        computerInputNumbers,
        userInputNumbers
      );
    }
  }
  valueOfBall -= valueOfStrike;
  return valueOfBall;
}
export { getStrikeNumber, getBallNumber };
