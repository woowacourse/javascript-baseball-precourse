import {
  $getUserInputValue,
  $setUserInputValue,
  $setResultText,
  $addSubmitButtonOnClick,
  $addGameRestartButtonOnClick,
  $hideResultElement,
  $showResultElement,
  $hideGameEndElement,
  $showGameEndElement,
} from "./client.js";
import { INVALID_INPUT_MESSAGE } from "./constants.js";
import Player from "./player.js";
import { alertErrorMessage, zip } from "./utils.js";

export default class BaseballGame {
  static validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  #isGameEnded; // 게임이 종료되었는지를 나타내는 플래그
  #size; // 추리해야 하는 숫자 개수
  #computerPlayer; // 랜덤으로 정답을 선택하는 컴퓨터 플레이어

  constructor(size) {
    this.#isGameEnded = false;
    this.#size = size;
    this.#computerPlayer = new Player(size);
  }

  get size() {
    return this.#size;
  }

  get isGameEnded() {
    return this.#isGameEnded;
  }

  get computerAnswer() {
    return this.#computerPlayer.answer;
  }

  static inValidRange(num) {
    return BaseballGame.validNumbers.includes(num);
  }

  isValidInputString(inputString) {
    const inputNumbers = inputString.split("").map(Number);
    const hasNoNaN = !inputNumbers.some(Number.isNaN);
    const isValidSize = inputNumbers.length === this.#size;
    const isValidValue = inputNumbers.every(BaseballGame.inValidRange);
    const isUnique = inputNumbers.length === new Set(inputNumbers).size;
    return hasNoNaN && isValidSize && isValidValue && isUnique;
  }

  parseInputString(inputString) {
    if (!this.isValidInputString(inputString)) {
      return null;
    }
    return inputString.split("").map(Number);
  }

  getStrikes(answerNumbers, inputNumbers) {
    return zip(answerNumbers, inputNumbers).filter(
      ([num1, num2]) => num1 === num2
    ).length;
  }

  getBalls(answerNumbers, inputNumbers) {
    const total = inputNumbers.filter((num) =>
      answerNumbers.includes(num)
    ).length;
    const strikes = this.getStrikes(answerNumbers, inputNumbers);
    return total - strikes;
  }

  getResultString(balls, strikes) {
    if (balls === 0 && strikes === 0) {
      return "낫싱";
    }

    const ballString = balls === 0 ? "" : `${balls}볼`;
    const strikeString = strikes === 0 ? "" : `${strikes}스트라이크`;
    const spaceString = balls === 0 || strikes === 0 ? "" : " ";
    return `${ballString}${spaceString}${strikeString}`;
  }

  play(computerInputNumbers, userInputNumbers) {
    const balls = this.getBalls(computerInputNumbers, userInputNumbers);
    const strikes = this.getStrikes(computerInputNumbers, userInputNumbers);

    if (strikes === this.#size) {
      this.#isGameEnded = true;
    }

    return this.getResultString(balls, strikes);
  }

  restart() {
    this.#computerPlayer.setRandomAnswer();
    this.#isGameEnded = false;
  }
}

const game = new BaseballGame(3);

/* 게임 진행용 이벤트 핸들러 */
const submitButtonOnClick = () => {
  const userInputString = $getUserInputValue();

  if (!game.isValidInputString(userInputString)) {
    alertErrorMessage(INVALID_INPUT_MESSAGE);
    return;
  }

  const userInputNumbers = game.parseInputString(userInputString);
  const resultMessage = game.play(game.computerAnswer, userInputNumbers);
  $setResultText(resultMessage);

  if (game.isGameEnded) {
    $hideResultElement();
    $showGameEndElement();
  }
};

const gameRestartButtonOnClick = () => {
  game.restart();
  $setUserInputValue("");
  $setResultText("");
  $hideGameEndElement();
  $showResultElement();
};

/* HTML View에 게임 진행용 이벤트 등록 */
const initHTML = () => {
  $hideGameEndElement();
  $addSubmitButtonOnClick(submitButtonOnClick);
  $addGameRestartButtonOnClick(gameRestartButtonOnClick);
};

initHTML();
