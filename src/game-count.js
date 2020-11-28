import randomNumberMaker from "./random-number-maker.js";
import printMessage, { clearResult } from "./print-messages.js";
import userInput, { isValidUserInput } from "./user-input.js";

const randomNumberArray = randomNumberMaker(3);

export function countStrike(validUserInputValueArray) {
  let strikeCount = 0;

  for (let i = 0; i < randomNumberArray.length; i++) {
    if (validUserInputValueArray[i] === randomNumberArray[i]) {
      strikeCount += 1;
    }
  }

  return strikeCount;
}

export function countBall(validUserInputValueArray) {
  let ballCount = 0;

  for (let i = 0; i < randomNumberArray.length; i++) {
    if ((validUserInputValueArray.includes(randomNumberArray[i])) && (validUserInputValueArray.indexOf(randomNumberArray[i]) !== i)) {
      ballCount += 1;
    }
  }

  return ballCount;
}

const LENGTH_OF_NUMBERS_GIVEN = 3;

export default function playGame() {
  const userInputValue = userInput();
  let validUserInputValueArray = [];

  if (isValidUserInput(userInputValue, LENGTH_OF_NUMBERS_GIVEN)) {
    validUserInputValueArray = userInputValue.split("").map(Number);   
    
    const BALL_COUNT = countBall(validUserInputValueArray);
    const STRIKE_COUNT = countStrike(validUserInputValueArray);

    printMessage(BALL_COUNT, STRIKE_COUNT);
  } else {
    clearResult()
  }
  
}