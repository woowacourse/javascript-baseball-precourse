import { $ } from './util/dom.js';
import { NUM_COUNT } from './constant/constant.js';

export const getStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < NUM_COUNT; i++) {
    if (userInputNumbers[i] === computerInputNumbers[i]) {
      strike++;
    } else if (computerInputNumbers.includes(userInputNumbers[i])) {
      ball++;
    }
  }
  const result = [ball, strike];
  return result;
};

export const getResultString = (ball, strike) => {
  let result = '';
  if (ball === 0 && strike === 0) {
    result = `낫싱`;
  } else if (strike === 3) {
    result = `🎉**정답을 맞추셨습니다**🎉`;
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
  const template = () => {
    return `
            <div id="game-restart-box">
              <span id="game-restart-message">게임을 새로 시작하시겠습니까?<span>
              <button class="button" id="game-restart-button">게임 재시작</button>
            <div>
            `;
  };
  $('#result').innerHTML += template();
};
