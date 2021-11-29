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

export function getStrikeHint(computerInputNumbers, userInputNumbers, result) {
  const strike = countStrike(computerInputNumbers, userInputNumbers);
  let hint = result;

  if (strike) {
    hint += hint ? ' ' : '';
    hint += `${strike}스트라이크`;
  }

  return hint;
}
