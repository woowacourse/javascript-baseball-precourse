const countBallsAndStrikes = (computerInput, userInput) => {
  const computerNums = String(computerInput).split('');
  const userNums = String(userInput).split('');

  let balls = 0;
  let strikes = 0;

  for (let i = 0; i < computerNums.length; i++) {
    if (computerNums[i] === userNums[i]) {
      strikes++;
      continue;
    }
    if (computerNums.includes(userNums[i])) balls++;
  }
  return [balls, strikes];
};

export default countBallsAndStrikes;
