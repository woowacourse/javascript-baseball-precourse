import DOMUtils from './DOMUtils.js';
import { NUMBER, POINT, ANSWER } from '../constants.js';

const playUtils = {
  isBallOrStrike: (scoreBoard) => {
    if (scoreBoard.ball > POINT.ZERO && scoreBoard.strike > POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.ball}볼 ${scoreBoard.strike}스트라이크`);
    } else if (scoreBoard.ball > POINT.ZERO && scoreBoard.strike === POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.ball}볼`);
    } else if (scoreBoard.ball === POINT.ZERO && scoreBoard.strike > POINT.ZERO) {
      DOMUtils.showResult(`${scoreBoard.strike}스트라이크`);
    }
  },
  showScoreToResult: (scoreBoard) => {
    if (scoreBoard.strike === NUMBER.DIGIT) {
      DOMUtils.showResult(ANSWER.RIGHT);
      return true;
    }
    if (scoreBoard.ball === POINT.ZERO && scoreBoard.strike === POINT.ZERO) {
      DOMUtils.showResult(ANSWER.NOTHING);
      return false;
    }
    playUtils.isBallOrStrike(scoreBoard);
    return false;
  },
  isIndexSame: (computerInputNumbers, scoreBoard, number, index) => {
    computerInputNumbers.indexOf(number) === index
      ? scoreBoard.strike + POINT.ONE
      : scoreBoard.ball + POINT.ONE;
  },
  isIncludeNumber: (computerInputNumbers, number) => {
    return computerInputNumbers.includes(number);
  },
  setScoreBoard: (computerInputNumbers, scoreBoard, number, index) => {
    playUtils.isIncludeNumber(computerInputNumbers, number) &&
      playUtils.isIndexSame(computerInputNumbers, scoreBoard, number, index);
  },
};

export default playUtils;
