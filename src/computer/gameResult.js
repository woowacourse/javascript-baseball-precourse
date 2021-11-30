const $result = document.querySelector('#result');
const $input = document.querySelector('#user-input');

const RESULT_MESSAGE = {
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
};

function getStrikeCount(computerInputNumbers, userInputNumbers) {
  let strikeCount = 0;
  let index = 0;

  for (index; index < computerInputNumbers.length; index++) {
    if (computerInputNumbers[index] === userInputNumbers[index]) {
      strikeCount++;
    }
  }
  return strikeCount;
}

function getBallCount(sameCount, strikeCount) {
  return sameCount - strikeCount;
}

function getSameCount(computerInputNumbers, userInputNumbers) {
  const concatNumbers = computerInputNumbers + userInputNumbers;

  return concatNumbers.length - new Set(concatNumbers).size;
}

function printCorrect() {
  $input.readOnly = true;
  $result.innerHTML = `
    <div>
      <div>
      🎉<strong>정답을 맞추셨습니다</strong>🎉
      </div>
      <br/>
      <div>
      <span>게임을 새로 시작하시겠습니까?</span>
      <button id="game-restart-button">게임 재시작</button>
      </div>
     </div>`;
}

function printNothing() {
  $result.textContent = RESULT_MESSAGE.NOTHING;
}

function printBallAndStrike(strikeCount, ballCount) {
  if (!strikeCount && ballCount) {
    $result.textContent = `${ballCount}${RESULT_MESSAGE.BALL}`;
  }
  if (strikeCount && !ballCount) {
    $result.textContent = `${strikeCount}${RESULT_MESSAGE.STRIKE}`;
  }
  if (strikeCount && ballCount) {
    $result.textContent = `${ballCount}${RESULT_MESSAGE.BALL} ${strikeCount}${RESULT_MESSAGE.STRIKE}`;
  }
}

export default function getGameResult(computerInputNumbers, userInputNumbers) {
  if (computerInputNumbers === userInputNumbers) {
    return printCorrect();
  }

  const sameCount = getSameCount(computerInputNumbers, userInputNumbers);
  const strikeCount = getStrikeCount(computerInputNumbers, userInputNumbers);
  const ballCount = getBallCount(sameCount, strikeCount);

  if (ballCount + strikeCount === 0) {
    return printNothing();
  }
  return printBallAndStrike(strikeCount, ballCount);
}
