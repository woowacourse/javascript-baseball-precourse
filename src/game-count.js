import randomNumberMaker from "./random-number-maker.js";

const randomNumberArray = randomNumberMaker(3)

export function countBall(validUserInputValueArray) {
  let ballCount = 0;

  for (let i = 0; i < randomNumberArray.length; i++) {
    if ((validUserInputValueArray.includes(randomNumberArray[i])) && (validUserInputValueArray.indexOf(randomNumberArray[i]) !== i)) {
      ballCount += 1;
    }
  }

  return ballCount;
}
