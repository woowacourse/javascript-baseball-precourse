const getRandomNumber = (minNumber, maxNumber) => {
  return MissionUtils.Random.pickNumberInRange(minNumber, maxNumber);
};

const getComputerNumber = () => {
  const computerNumbers = new Set();

  while (computerNumbers.size !== 3) {
    computerNumbers.add(getRandomNumber(1, 9));
  }

  return parseInt(Array.from(computerNumbers).join(""), 10);
};

export default getComputerNumber;
