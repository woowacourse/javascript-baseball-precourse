import { NUMBER_LENGTH } from './consts.js';

export function calculateDuplicatedNum(Number1, Number2) {
  const a = String(Number1).split('');
  const b = String(Number2).split('');
  const Intersection = a.filter(x => b.includes(x));
  return Intersection.length;
}

export function calStrike(computerNumber, userNumber) {
  const computerNumStr = String(computerNumber).split('');
  const userNumStr = String(userNumber).split('');
  let count = 0;
  for (let i = 0; i < NUMBER_LENGTH; i++) {
    if (computerNumStr[i] === userNumStr[i]) {
      count++;
    }
  }
  return count;
}

export function calBall(computerNumber, userNumber) {
  return (
    calculateDuplicatedNum(computerNumber, userNumber) -
    calStrike(computerNumber, userNumber)
  );
}
