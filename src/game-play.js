import printResult, { clearResult, makeRestartBtn } from "./print-result.js";
import userInput, { isValidUserInput } from "./user-input.js";
import countStrike, { isGameEnded, countBall } from "./game-count.js";
import randomNumberMaker from "./random-number-maker.js";

export default function playGame(state) {
  const userInputValue = userInput();
  const randomNumberArray = state.randomNumber;
  const givenNumberLength = state.givenNumberLength;
  let validUserInputValueArray = [];

  if (isValidUserInput(userInputValue, givenNumberLength)) {
    validUserInputValueArray = userInputValue.split("").map(Number);   
    
    const BALL_COUNT = countBall(randomNumberArray, validUserInputValueArray);
    const STRIKE_COUNT = countStrike(randomNumberArray, validUserInputValueArray);
  
    printResult(BALL_COUNT, STRIKE_COUNT);

    if (isGameEnded(STRIKE_COUNT)) {
      makeRestartBtn();
      document.getElementById('game-restart-button').addEventListener('click', () => {
        restartGame(state);
      })
    }

  } else {
    clearResult();
  }
}

export function restartGame(state) {
  const givenNumberLength = state.givenNumberLength;
  state.randomNumber = randomNumberMaker(givenNumberLength);
  clearResult();
}