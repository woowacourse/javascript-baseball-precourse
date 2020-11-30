import randomNumberMaker from "./random-number-maker.js";
import userInput, { isValidUserInput } from "./user-input.js";
import countStrike, { isGameEnded, countBall } from "./game-count.js";
import printResult, { clearResult, makeRestartBtn } from "./print-result.js";

const state = {
  givenNumberLength: 3,
  randomNumber: "",
  userInputValue: "",
  ballCount: "",
  strikeCount: "",
  returnMessage: ""
};

export default function BaseballGame() {
  const givenNumberLength = state.givenNumberLength;
  const submitButton = document.getElementById("submit");

  state.randomNumber = randomNumberMaker(givenNumberLength);

  this.play = function(computerInputNumbers, userInputNumbers) {
    let validUserInputValueArray = [];

    if (isValidUserInput(userInputNumbers, givenNumberLength)) {
      validUserInputValueArray = userInputNumbers.split("").map(Number);

      state.ballCount = countBall(computerInputNumbers, validUserInputValueArray);
      state.strikeCount = countStrike(computerInputNumbers, validUserInputValueArray);
      state.returnMessage = printResult(state.ballCount, state.strikeCount);
    } else {
      clearResult();
    }

    return state.returnMessage;
  };

  this.restartPlay = function() {
    state.randomNumber = randomNumberMaker(givenNumberLength);
    submitButton.disabled = false;
    clearResult(state);
  };

  submitButton.addEventListener("click", () => {
    state.userInputValue = userInput();
    this.play(state.randomNumber, state.userInputValue);
    
    if (isGameEnded(state.strikeCount)) {
      makeRestartBtn();
      const gameRestartButton = document.getElementById("game-restart-button");

      submitButton.disabled = true;
      
      gameRestartButton.addEventListener("click", () => {
        this.restartPlay();
      });
    }
  });
}

new BaseballGame();
