import { $ } from './util/dom.js';
import { NUM_COUNT, template } from './constant/constant.js';

export const getStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < NUM_COUNT; i += 1) {
    if (userInputNumbers[i] === computerInputNumbers[i]) {
      strike += 1;
    } else if (computerInputNumbers.includes(userInputNumbers[i])) {
      ball += 1;
    }
  }
  const result = [ball, strike];
  return result;
};

export const getResultString = (ball, strike) => {
  let result = '';
  if (ball === 0 && strike === 0) {
    result = '낫싱';
  } else if (strike === 3) {
    result = '🎉**정답을 맞추셨습니다**🎉';
  } else if (ball === 0) {
    result = `${strike}스트라이크`;
  } else if (strike === 0) {
    result = `${ball}볼`;
  } else {
    result = `${ball}볼 ${strike}스트라이크`;
  }
  return result;
};

export const renderResult = result => {
  $('#result').innerHTML = result;
  if (result !== '🎉**정답을 맞추셨습니다**🎉') {
    return;
  }
  $('#result').innerHTML = `<strong>${result}</strong><br /><br />`;
  $('#result').innerHTML += template();
};
