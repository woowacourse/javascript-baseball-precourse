export default function countStrike(randomNumberArray, validUserInputValueArray) {
  let strikeCount = 0;

  for (let i = 0; i < randomNumberArray.length; i++) {
    if (validUserInputValueArray[i] === randomNumberArray[i]) {
      strikeCount += 1;
    }
  }

  return strikeCount;
}

export function countBall(randomNumberArray, validUserInputValueArray) {
  let ballCount = 0;

  for (let i = 0; i < randomNumberArray.length; i++) {
    if (
      validUserInputValueArray.includes(randomNumberArray[i]) &&
      validUserInputValueArray.indexOf(randomNumberArray[i]) !== i
    ) {
      ballCount += 1;
    }
  }

  return ballCount;
}

export function isGameEnded(strikeCount) {
  if (strikeCount === 3) {
    return true;
  }

  return false;
}
