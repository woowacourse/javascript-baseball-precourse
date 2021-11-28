import { isNotValidInput } from './checkValidInput.js';
import { ERROR_MESSAGE } from './constant.js';

export const setComputerNumber = () => {
  const computerInputNumbers = [];
  let randomNumber;
  while (computerInputNumbers.length < 3) {
    randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerInputNumbers.includes(randomNumber)) {
      computerInputNumbers.push(randomNumber);
    }
  }
  return computerInputNumbers.join('');
}

export const getUserInput = (userInputText) => {
  const inputValue = userInputText.value;
  setUserInputClean(userInputText);
  if (isNotValidInput(inputValue)) {
    alert(ERROR_MESSAGE);
    return '';
  }
  return inputValue;
}

const setUserInputClean = (userInputText) => {
  userInputText.value = '';
}

export const countStrikeAndBall = (computerInputNumbers, userInputNumbers) => {
  let strikeCount = 0;
  let ballCount = 0;
  for (let i = 0; i < userInputNumbers.length; i++) {
    if (isStrike(computerInputNumbers, userInputNumbers[i], i)) {
      strikeCount++;
    }
    if (isBall(computerInputNumbers, userInputNumbers[i], i)) {
      ballCount++;
    }
  }
  return {strikeCount, ballCount};
}

export const getGameResultText = (strikeCount, ballCount) => {
  let gameResult = [];
  if (ballCount) {
    gameResult.push(`${ballCount}볼`);
  }
  if (strikeCount) {
    gameResult.push(`${strikeCount}스트라이크`);
  }
  if (ballCount === 0 && strikeCount === 0) {
    gameResult.push(`낫싱`);
  }
  return gameResult.join(' ');
}

const isStrike = (computerInputNumbers, target, idx) => {
  if (computerInputNumbers.includes(target)) {
    if (computerInputNumbers.indexOf(target) === idx) {
      return true;
    }
  }
  return false;
}

const isBall = (computerInputNumbers, target, idx) => {
  if (computerInputNumbers.includes(target)) {
    if (computerInputNumbers.indexOf(target) !== idx) {
      return true;
    }
  }
  return false;
}

