export const caculateStrikeAndBall = (
  computerInputNumbers,
  userInputNumbers
) => {
  const strike = calculateStrikeCount(computerInputNumbers, userInputNumbers);
  const ball = calculateBallCount(computerInputNumbers, userInputNumbers);

  return { strike, ball };
};

const calculateStrikeCount = (computerInputNumbers, userInputNumbers) => {
  let strikeCnt = 0;
  computerInputNumbers.forEach((computerNumber, idx) => {
    if (computerNumber === userInputNumbers[idx]) {
      strikeCnt += 1;
    }
  });

  return strikeCnt;
};

const calculateBallCount = (computerInputNumbers, userInputNumbers) => {
  let ballCnt = 0;
  computerInputNumbers.forEach((computerNumber, idx) => {
    if (
      computerNumber !== userInputNumbers[idx] &&
      userInputNumbers.includes(computerNumber)
    ) {
      ballCnt += 1;
    }
  });

  return ballCnt;
};
