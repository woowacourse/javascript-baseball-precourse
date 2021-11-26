const getComputerInputNumbers = () => {
  const arr = [];
  while (arr.length < 3) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  }
  return arr.join('');
};

export default getComputerInputNumbers;
