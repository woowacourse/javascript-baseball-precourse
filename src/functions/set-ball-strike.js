import { state } from '../state.js';

export default function setBallStrike(computerInput, userInput) {
  for (let i = 0; i < computerInput.length; i += 1) {
    if (userInput.includes(computerInput[i]) && userInput.indexOf(computerInput[i]) === i) {
      state.strikeCount++;
    } else if (userInput.includes(computerInput[i])) {
      state.ballCount++;
    }
  }
}
