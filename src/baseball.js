import BaseballGame from './index.js';

const baseballWrapper = document.body.querySelector('#app');
const submitButton = baseballWrapper.querySelector('#submit');
const userInput = baseballWrapper.querySelector('#user-input');
const game = new BaseballGame();

const onSubmitUserInput = () => {
  const {runningGame, answer} = game;
  if (!runningGame) {
    return alert('게임을 재시작해주세요.');
  }
  if (!game.isInputRight(userInput.value)) {
    return (userInput.value = '');
  }
  const resultText = game.play(answer, userInput.value);

  return game.showResultOnScreen(resultText);
};

submitButton.addEventListener('click', onSubmitUserInput);
