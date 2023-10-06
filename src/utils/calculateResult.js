const ballCounter = (computerInputNumbers, userInputNumbers) => {
  let ballCount = 0;
  computerInputNumbers.split('').forEach((computerInputNumber, index) => {
    if (computerInputNumber !== userInputNumbers.split('')[index]) {
      ballCount += 1;
    }
  });
  return ballCount;
};
const strikeCounter = (computerInputNumbers, userInputNumbers) => {
  let strikeCount = 0;
  computerInputNumbers.split('').forEach((computerInputNumber, index) => {
    if (computerInputNumber === userInputNumbers.split('')[index]) {
      strikeCount += 1;
    }
  });
  return strikeCount;
};

export const calculateResult = (computerInputNumbers, userInputNumbers) => {
  const ballCount = ballCounter(computerInputNumbers, userInputNumbers);
  const strikeCount = strikeCounter(computerInputNumbers, userInputNumbers);

  return { ballCount, strikeCount };
};
