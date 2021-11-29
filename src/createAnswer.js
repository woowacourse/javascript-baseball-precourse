const createAnswer = () => {
  const computerInputNumbers = new Set();
  while (computerInputNumbers.size < 3) {
    computerInputNumbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return [...computerInputNumbers];
};

export default createAnswer;
