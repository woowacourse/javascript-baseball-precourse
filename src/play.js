import { ANSWER, ANSWER_TEMPLATE } from './constant.js';

function getStrikeCount(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;
  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikeCount += 1;
    }
  }
  return strikeCount;
}
function getBallCount(computerInputNumbers, userInputNumbers) {
  let ballCount = 0;
  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (
      computerInputNumbers.includes(userInputNumbers[i]) &&
      computerInputNumbers.indexOf(userInputNumbers[i]) !== i
    ) {
      ballCount += 1;
    }
  }
  return ballCount;
}

export function compareInputNumbers(computerInputNumbers, userInputNumbers) {
  const ball = getBallCount(computerInputNumbers, userInputNumbers);
  const strike = getStrikeCount(computerInputNumbers, userInputNumbers);
  return { ball, strike };
}

export function makeResultString(comparedResult) {
  const resultArray = [];
  if (comparedResult.ball) {
    resultArray.push(`${comparedResult.ball}볼`);
  }
  if (comparedResult.strike) {
    resultArray.push(`${comparedResult.strike}스트라이크`);
  }
  if (resultArray.length === 0) {
    resultArray.push('낫싱');
  }
  return resultArray.join(' ');
}

export function showResultString(resultString, $resultDiv) {
  if (resultString === ANSWER) {
    $resultDiv.innerHTML = ANSWER_TEMPLATE;
    return true;
  }
  $resultDiv.innerHTML = resultString;
}
