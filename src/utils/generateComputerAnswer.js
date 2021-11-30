export const generateComputerAnswer = () => {
  const answer = [];

  while (answer.length < 3) {
    const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!answer.includes(randomNum)) answer.push(randomNum);
  }
  return Number(answer.join(''));
};
