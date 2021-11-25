const getComputerInputNumbers = () => {
  const result = [];
  while (result.length < 3) {
    const randomNumber = window.MissionUtils.Random.pickNumberInRange(1, 9);

    if (!result.includes(randomNumber)) result.push(randomNumber);
  }

  console.log("computerInputNumbers :", result);
  return result;
};

export default getComputerInputNumbers;
