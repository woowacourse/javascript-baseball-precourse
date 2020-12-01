function getGameResultText(strikeCount, ballCount) {
  if (strikeCount === 3) {
    return '정답';
  }
  if (!strikeCount && !ballCount) {
    return '낫싱';
  }
  if (!strikeCount && ballCount) {
    return `${ballCount}볼`;
  }
  if (strikeCount && !ballCount) {
    return `${strikeCount}스트라이크`;
  }
  if (strikeCount && ballCount) {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }
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

function getStrikeCount(computerInputNumbers, userInputNumbers) {
  return computerInputNumbers.reduce((acc, currentValue, index) => {
    if (currentValue === userInputNumbers[index]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

export default function getGameResult(computerInputNumbers, userInputNumbers) {
  const computerInputArray = String(computerInputNumbers).split('');
  const userInputArray = String(userInputNumbers).split('');

  const ballCount = getBallCount(computerInputArray, userInputArray);
  const strikeCount = getStrikeCount(computerInputArray, userInputArray);

  return getGameResultText(strikeCount, ballCount);
}
