import printGameResult from './printGameResult.js';

function getStrikeCount(computerInputNumbers, userInputNumbers) {
  return computerInputNumbers.reduce((acc, currentValue, index) => {
    if (currentValue === userInputNumbers[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function getBallCount(computerInputNumbers, userInputNumbers) {
  return userInputNumbers.reduce((acc, currentValue, index) => {
    if (
      currentValue !== computerInputNumbers[index] &&
      computerInputNumbers.includes(currentValue)
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

export default function gameProgress(computerInputNumbers, userInputNumbers) {
  const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = getBallCount(computerInputNumbers, userInputNumbers);

  return printGameResult(strikeCount, ballCount);
}
