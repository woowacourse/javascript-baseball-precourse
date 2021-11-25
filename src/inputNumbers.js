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
