import { countIntersect, countStrike, countBall } from './Count.js';

export function getNothingHint(computerInputNumbers, userInputNumbers) {
  const intersect = countIntersect(computerInputNumbers, userInputNumbers);
  let hint = '';

  if (!intersect) hint = '낫싱';

  return hint;
}

export function getBallHint(computerInputNumbers, userInputNumbers) {
  const intersect = countIntersect(computerInputNumbers, userInputNumbers);
  const strike = countStrike(computerInputNumbers, userInputNumbers);
  const ball = countBall(intersect, strike);
  let hint = '';

  if (ball) hint = `${ball}볼`;

  return hint;
}

export function getStrikeHint(strike, result) {
  let hint = result;
  hint += hint ? ' ' : '';
  hint += `${strike}스트라이크`;

  return hint;
}

export function getGameOver() {
  let result;
  result = '<p>🎉 <strong>정답을 맞추셨습니다!</strong> 🎉</p>';
  result += '게임을 새로 시작하시겠습니까?  ';
  result += '<button id="game-restart-button">게임 재시작</button>';

  return result;
}
