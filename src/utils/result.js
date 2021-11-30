import { $ } from './selector.js';
import { restartButton } from '../constants/constants.js';

export const showResultString = (balls, strikes) => {
  let result = '';

  if (!strikes && !balls) {
    result = '낫싱';
  } else if (strikes === 3) {
    result = `👍정답을 맞추셨습니다. 게임을 새로 시작하시겠습니까?`;
  } else if (!strikes) {
    result = `${balls}볼`;
  } else if (!balls) {
    result = `${strikes}스트라이크`;
  } else {
    result = `${balls}볼 ${strikes}스트라이크`;
  }

  return result;
};

export const renderResult = result => {
  $('#result').innerHTML = result;
  if (result !== '👍정답을 맞추셨습니다. 게임을 새로 시작하시겠습니까?') return;
  $('#result').innerHTML = `<strong>${result}</strong>`;
  $('#result').innerHTML += restartButton;
};
