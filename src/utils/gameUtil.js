import { GAME, MESSAGE } from './constants.js';

// 스트라이크, 볼 카운트에 대한 Hint 관련
export const calculateCount = (target, inputs) => {
  const strike = target.filter((num, i) => num === inputs[i]).length;
  const ball = target
    .filter((num, i) => num !== inputs[i])
    .filter((num) => inputs.includes(num)).length;

  return {
    strike,
    ball,
  };
};

export const getHint = ({ strike, ball }) => {
  let result = '';
  const ballCnt = ball ? `${ball}${MESSAGE.BALL}` : '';
  const strikeCnt = strike ? `${strike}${MESSAGE.STRIKE}` : '';

  result = ballCnt + ' ' + strikeCnt;
  result = result.trim();

  return result ? result : `${MESSAGE.NOTHING}`;
};

// 정답 숫자 생성 관련
const generateNumber = () => {
  return Math.floor(Math.random() * GAME.LAST) + GAME.START;
};

export const generateTargetNumbers = () => {
  const result = new Set();

  while (result.size !== GAME.THREE) {
    result.add(generateNumber());
  }

  return [...result];
};
