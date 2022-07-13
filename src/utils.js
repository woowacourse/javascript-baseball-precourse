export const convertToArray = (inputData) => [...inputData];

export const checkNothing = (userArray, computerArray) => {
  let ballStrikeCount = 0;
  if (computerArray.includes(userArray[0])) {
    ballStrikeCount += 1;
  }
  if (computerArray.includes(userArray[1])) {
    ballStrikeCount += 1;
  }
  if (computerArray.includes(userArray[2])) {
    ballStrikeCount += 1;
  }
  return ballStrikeCount;
};

export const checkStrike = (userArray, computerArray) => {
  let strikeCount = 0;
  if (userArray[0] === computerArray[0]) {
    strikeCount += 1;
  }
  if (userArray[1] === computerArray[1]) {
    strikeCount += 1;
  }
  if (userArray[2] === computerArray[2]) {
    strikeCount += 1;
  }
  return strikeCount;
};

export const showResult = (message) => {
  const RESULT = document.querySelector('#result');
  RESULT.innerHTML = message;
};

export const play = () => {

};
