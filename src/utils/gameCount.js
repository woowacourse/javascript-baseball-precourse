import { getUserInput } from './getUserInput.js';
import { getComputerInput } from './getComputerInput.js';

const computerInputValue = getComputerInput();
export function gameCount(computerInput, userInput) {
  let strikeCount = 0;
  let ballCount = 0;
  computerInput = computerInputValue;
  userInput = getUserInput()
    .split('')
    .map((num) => Number(num));
  console.log(computerInput);
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === computerInput[i]) {
      strikeCount++;
    } else if (userInput.includes(computerInput[i])) {
      ballCount++;
    }
  }

  return [strikeCount, ballCount];
}
