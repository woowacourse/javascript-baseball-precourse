export const compareInputWithAnswer = (
  computerInputNumbers,
  userInputNumbers
) => {
  let result = {
    strike: 0,
    ball: 0,
  };

  computerInputNumbers.split('').forEach((element) => {
    if (userInputNumbers.includes(element)) {
      result.ball += 1;
    }
  });

  for (let index = 0; index < computerInputNumbers.length; index++) {
    if (computerInputNumbers[index] === userInputNumbers[index]) {
      result.strike += 1;
    }
  }

  result.ball -= result.strike;

  return result;
};
