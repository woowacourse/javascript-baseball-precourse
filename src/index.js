import BaseballGame from './lib/baseballGame.js';

const baseballGame = new BaseballGame();

const $userInput = document.getElementById('user-input');
const $submit = document.getElementById('submit');
const $result = document.getElementById('result');

const renderPlay = result => {
  $result.innerHTML =
    result === '3스트라이크'
      ? `
    <strong>정답을 맞추셨습니다!</strong>
    <div>
      <span>게임을 새로 시작하시겠습니까?</span>
      <button id='game-restart-button'>재시작</button>
    </div>`
      : result;
};

$submit.onclick = e => {
  e.preventDefault();

  const userInputNumbers = $userInput.value;
  const result = baseballGame.play(baseballGame.answer, userInputNumbers);

  renderPlay(result);

  $userInput.value = '';
};
