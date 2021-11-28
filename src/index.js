import DOMUtils from './utils/DOMUtils.js';
import isValidNumbers from './utils/isValidNumbers.js';
import playUtils from './utils/playUtils.js';
import { POINT } from './constants.js';
import utils from './utils/utils.js';

export default function BaseballGame() {
  let computerInputNumbers = [];

  const init = () => {
    DOMUtils.init();

    computerInputNumbers = utils.pickUniqueThreeNumbers();
  };

  const restartGame = (e) => {
    e.preventDefault();

    DOMUtils.removeElement('#game-restart-message');

    init();
  };

  const restartEventListener = () => {
    DOMUtils.getElement('#game-restart-button').addEventListener('click', restartGame);
  };

  const play = (computerInputNumbers, userInputNumbers) => {
    const scoreBoard = { ball: POINT.ZERO, strike: POINT.ZERO };

    userInputNumbers.forEach((number, index) =>
      playUtils.setScoreBoard(computerInputNumbers, scoreBoard, number, index)
    );

    playUtils.showScoreToResult(scoreBoard) && restartEventListener();
  };

  const checkValidNumbers = (e) => {
    e.preventDefault();

    const userInput = DOMUtils.getElement('#user-input');

    if (!isValidNumbers(userInput)) return;

    play(computerInputNumbers, utils.stringToNumArray(userInput.value));

    userInput.focus();
  };

  init();

  DOMUtils.getElement('form').addEventListener('submit', checkValidNumbers);
}

new BaseballGame();
