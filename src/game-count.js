import userInput, { isValidUserInput } from "./user-input.js";
import randomNumberMaker from "./random-number-maker.js";

const randomNumberArray = randomNumberMaker(3)

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

export default function gameResult() {
  const validUserInputValueArray = isValidUserInput(userInput(), LENGTH_OF_NUMBERS_GIVEN);
  const BALL_COUNT = countBall(validUserInputValueArray);
  const STRIKE_COUNT = countStrike(validUserInputValueArray);
  let RETURN_MESSAGE = '';

  if (BALL_COUNT !== 0 && STRIKE_COUNT !== 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`${BALL_COUNT}볼 ${STRIKE_COUNT}스트라이크`);

  } else if (BALL_COUNT !== 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`${BALL_COUNT}볼`);

  } else if (STRIKE_COUNT !== 0) {
    RETURN_MESSAGE = RETURN_MESSAGE.concat(`${STRIKE_COUNT}스트라이크`);

  } else {
    RETURN_MESSAGE = RETURN_MESSAGE.concat("낫싱");

  }

  return RETURN_MESSAGE;
}