export const generateComputerNumber = () => {
  const computerNumber = [];
  while (computerNumber.length < 3) {
    let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumber.includes(randomNumber)) {
      computerNumber.push(randomNumber);
    }
  }
  return computerNumber.join('');
};
