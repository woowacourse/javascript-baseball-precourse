import { $userInput, $submit } from './constants.js';

export const generateComputerInputNumbers = () => {
  const arr = [];
  while (arr.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr.join('');
};

const isValidLength = () => $userInput.value.length === 3;
const isNumbers = () => !isNaN(Number($userInput.value));
const isOverlap = () => new Set($userInput.value).size !== 3;
const isContainZero = () => $userInput.value.includes('0');

export const getUserInputNumbers = () => {
  if (!isValidLength() || !isNumbers() || isOverlap() || isContainZero()) {
    alert('🚨 1부터 9까지 서로 다른 3개의 수를 입력해주세요!');
    return;
  }
  return $userInput.value;
};
