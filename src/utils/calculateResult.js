const ballCounter = (
  splittedComputerInputNumbers,
  splittedUserInputNumbers
) => {
  let ballCount = 0;
  splittedComputerInputNumbers.forEach((computerInputNumber, index) => {
    if (
      computerInputNumber !== splittedUserInputNumbers[index] &&
      splittedUserInputNumbers.includes(computerInputNumber)
    ) {
      ballCount += 1;
    }
  });
  return ballCount;
};

const strikeCounter = (
  splittedComputerInputNumbers,
  splittedUserInputNumbers
) => {
  let strikeCount = 0;
  splittedComputerInputNumbers.forEach((computerInputNumber, index) => {
    if (computerInputNumber === splittedUserInputNumbers[index]) {
      strikeCount += 1;
    }
  });
  return strikeCount;
};

export const calculateResult = (computerInputNumbers, userInputNumbers) => {
  const splittedComputerInputNumbers = computerInputNumbers.split('');
  const splittedUserInputNumbers = userInputNumbers.split('');
  const ballCount = ballCounter(
    splittedComputerInputNumbers,
    splittedUserInputNumbers
  );
  const strikeCount = strikeCounter(
    splittedComputerInputNumbers,
    splittedUserInputNumbers
  );

  return { ballCount, strikeCount };
};
