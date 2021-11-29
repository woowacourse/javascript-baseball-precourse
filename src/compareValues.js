// compare input with answer
const compareValues = function compareAnswerWithUserInput(answer, input) {
  const { ball, strike } = input.split("").reduce(
    (acc, num, i) => {
      // check strike and ball by comparing index at input and at answer
      checkStrikeBall(answer.indexOf(num), i, acc);

      return acc;
    },
    { ball: 0, strike: 0 }
  );

  return { ball, strike };
};

const checkStrikeBall = function checkInputStrikeBallScore(index, i, acc) {
  if (index === i) acc.strike += 1;
  else if (index >= 0) acc.ball += 1;
};

export default compareValues;
