import { state } from '../state.js';

export function initBallStrikeCount() {
  state.ballCount = 0;
  state.strikeCount = 0;
}

export function setBallStrike(computerInput, userInput) {
    const computerInputString = computerInput.toString();
    const userInputString = userInput.toString();
    for (let i = 0; i < computerInputString.length; i += 1) {
      if (
        userInputString.includes(computerInputString[i]) &&
        userInputString.indexOf(computerInputString[i]) === i
      ) {
        state.strikeCount += 1;
      } else if (userInputString.includes(computerInputString[i])) {
        state.ballCount += 1;
      }
    }
  }
  