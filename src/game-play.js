import randomNumberMaker from "./random-number-maker.js";
import printResult, { clearResult, makeRestartBtn } from "./print-result.js";
import userInput, { isValidUserInput } from "./user-input.js";
import countStrike, { isGameEnded, countBall } from "./game-count.js";

const LENGTH_OF_NUMBERS_GIVEN = 3;
const randomNumberArray = randomNumberMaker(LENGTH_OF_NUMBERS_GIVEN);

export default function playGame() {
  const userInputValue = userInput();
  let validUserInputValueArray = [];

  if (isValidUserInput(userInputValue, LENGTH_OF_NUMBERS_GIVEN)) {
    validUserInputValueArray = userInputValue.split("").map(Number);   
    
    const BALL_COUNT = countBall(randomNumberArray, validUserInputValueArray);
    const STRIKE_COUNT = countStrike(randomNumberArray, validUserInputValueArray);
  
    printResult(BALL_COUNT, STRIKE_COUNT);

    if (isGameEnded(STRIKE_COUNT)) {
      makeRestartBtn();
      document.getElementById('game-restart-button').addEventListener('click', () => {
        restartGame();
      })
    }

  } else {
    clearResult()
  }
}

export function restartGame() {
  clearResult();
  window.location.reload();
}