function getStrikeCount(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;

  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikeCount++;
    }
  }
  return strikeCount;
}

function getSameCount(computerInputNumbers, userInputNumbers) {
  const wholeInput = computerInputNumbers + userInputNumbers;

  return wholeInput.length - new Set(wholeInput).size;
}

function getOtherResult(strikeCount, ballCount) {
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

export default function getGameResult(computerInputNumbers, userInputNumbers) {
  if (computerInputNumbers === userInputNumbers) {
    return '정답';
  }

  const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = getSameCount(computerInputNumbers, userInputNumbers) - strikeCount;

  if (ballCount + strikeCount === 0) {
    return '낫싱';
  }
  return getOtherResult(strikeCount, ballCount);
}
