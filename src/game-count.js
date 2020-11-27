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
