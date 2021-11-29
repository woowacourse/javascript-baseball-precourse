const $input = document.getElementById('user-input');
const $submit = document.getElementById('submit');
const $result = document.getElementById('result');
const $restart = document.getElementById('game-restart-button');

const INPUT_ERROR = '1에서 9까지 서로 다른 임의의 수 3개를 입력하세요.';
const RESTART = `<h3>🎉 정답을 맞추셨습니다 🎉</h3>
게임을 새로 시작하시겠습니까? <button id="game-restart-button">게임 재시작</button>`;
const MIN = 1;
const MAX = 9;
const LENGTH = 3;

export {
  $input, 
  $submit, 
  $result, 
  $restart, 
  INPUT_ERROR, 
  RESTART, 
  MIN, 
  MAX, 
  LENGTH
};