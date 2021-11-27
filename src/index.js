import utils from './utils/utils.js';
import DOMUtils from './utils/DOMUtils.js';
import isValidNumbers from './utils/isValidNumbers.js';
import { NUMBER, POINT, ANSWER } from './constants.js';

export default function BaseballGame() {
  const userInputForm = DOMUtils.getElement('form');
  const userInput = DOMUtils.getElement('#user-input');
  let computerInputNumbers = [];

  this.init = function () {
    DOMUtils.setElementId('h3', 'resultTitle');
    DOMUtils.hideElement('#resultTitle');
    DOMUtils.initElementValue('#result');
    computerInputNumbers = utils.pickUniqueThreeNumbers();
  };

  this.isBallOrStrike = function (scoreBoard) {
    if (scoreBoard.ball > POINT.ZERO && scoreBoard.strike > POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.ball}볼 ${scoreBoard.strike}스트라이크`);
    } else if (scoreBoard.ball > POINT.ZERO && scoreBoard.strike === POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.ball}볼`);
    } else if (scoreBoard.ball === POINT.ZERO && scoreBoard.strike > POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.strike}스트라이크`);
    }
  };

  this.isIndexSame = (number, index) => {
    return computerInputNumbers.indexOf(number) === index;
  };

  this.isIncludeNumber = (number) => {
    return computerInputNumbers.includes(number);
  };

  this.setScoreBoard = function (scoreBoard, number, index) {
    this.isIncludeNumber(number) &&
      (this.isIndexSame(number, index)
        ? (scoreBoard.strike += POINT.ONE)
        : (scoreBoard.ball += POINT.ONE));
  };

  this.play = function (computerInputNumbers, userInputNumbers) {
    const scoreBoard = { ball: POINT.ZERO, strike: POINT.ZERO };

    userInputNumbers.forEach((number, index) => this.setScoreBoard(scoreBoard, number, index));

    console.log(computerInputNumbers);
    console.log(userInputNumbers);
    console.log(scoreBoard);

    if (scoreBoard.strike === NUMBER.DIGIT) {
      DOMUtils.showResult(ANSWER.RIGHT);
    } else if (scoreBoard.ball === POINT.ZERO && scoreBoard.strike === POINT.ZERO) {
      DOMUtils.showResult(ANSWER.NOTHING);
    } else {
      this.isBallOrStrike(scoreBoard);
    }
  };

  this.init();

  userInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidNumbers(userInput) &&
      this.play(computerInputNumbers, utils.stringToNumArray(userInput.value));
  });
}

new BaseballGame();
