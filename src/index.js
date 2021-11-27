import utils from './utils/utils.js';
import DOMUtils from './utils/DOMUtils.js';
import isValidNumbers from './utils/isValidNumbers.js';
import { NUMBER, POINT, ANSWER } from './constants.js';

export default function BaseballGame() {
  let computerInputNumbers = [];

  const init = () => {
    DOMUtils.init();
    computerInputNumbers = utils.pickUniqueThreeNumbers();
  };

  const isBallOrStrike = (scoreBoard) => {
    if (scoreBoard.ball > POINT.ZERO && scoreBoard.strike > POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.ball}볼 ${scoreBoard.strike}스트라이크`);
    } else if (scoreBoard.ball > POINT.ZERO && scoreBoard.strike === POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.ball}볼`);
    } else if (scoreBoard.ball === POINT.ZERO && scoreBoard.strike > POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.strike}스트라이크`);
    }
  };

  const isIndexSame = (number, index) => {
    return computerInputNumbers.indexOf(number) === index;
  };

  const isIncludeNumber = (number) => {
    return computerInputNumbers.includes(number);
  };

  const setScoreBoard = (scoreBoard, number, index) => {
    isIncludeNumber(number) &&
      (isIndexSame(number, index)
        ? (scoreBoard.strike += POINT.ONE)
        : (scoreBoard.ball += POINT.ONE));
  };

  const restartEventListener = () => {
    const gameRestart = DOMUtils.getElement('#game-restart-button');
    gameRestart.addEventListener('click', (e) => {
      e.preventDefault();
      DOMUtils.removeElement('#game-restart-message');
      init();
    });
  };

  const play = (computerInputNumbers, userInputNumbers) => {
    const scoreBoard = { ball: POINT.ZERO, strike: POINT.ZERO };

    userInputNumbers.forEach((number, index) => setScoreBoard(scoreBoard, number, index));

    // console.log(computerInputNumbers);
    // console.log(userInputNumbers);
    // console.log(scoreBoard);

    if (scoreBoard.strike === NUMBER.DIGIT) {
      DOMUtils.showResult(ANSWER.RIGHT);
      restartEventListener();
    } else if (scoreBoard.ball === POINT.ZERO && scoreBoard.strike === POINT.ZERO) {
      DOMUtils.showResult(ANSWER.NOTHING);
    } else {
      isBallOrStrike(scoreBoard);
    }
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
