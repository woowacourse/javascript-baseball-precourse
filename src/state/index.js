import { NUMBER_LENGTH, RANGE_MAX, RANGE_MIN } from '../constants/game-rule.js';

export const state = {
  userInput: 0,
  computerInput: 0,
  ballCount: 0,
  strikeCount: 0,

  initUserInput() {
    state.userInput = 0;
  },
  initBallStrike() {
    state.ballCount = 0;
    state.strikeCount = 0;
  },
  // computerInput, userInput에 따라 볼, 스트라이크 개수 설정
  setBallStrike(computerInput, userInput) {
    const computerInputString = computerInput.toString();
    const userInputString = userInput.toString();
    let i;
    for (i = 0; i < computerInputString.length; i += 1) {
      if (
        userInputString.includes(computerInputString[i]) &&
        userInputString.indexOf(computerInputString[i]) === i
      ) {
        state.strikeCount += 1;
      } else if (userInputString.includes(computerInputString[i])) {
        state.ballCount += 1;
      }
    }
  },
  setUserInput(userInputValue){
    state.userInput = userInputValue;
  },
  // 주어진 범위 내의 무작위 난수를 중복없이 만듬
  setComputerInput() {
    let randomNumberString = '';
    while (randomNumberString.length < NUMBER_LENGTH) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
      if (!randomNumberString.includes(randomNumber)) {
        randomNumberString += randomNumber;
      }
    }
    state.computerInput = parseInt(randomNumberString);
  },
};
