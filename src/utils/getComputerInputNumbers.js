const getComputerInputNumbers = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNumber = window.MissionUtils.Random.pickNumberInRange(1, 9);
    const isContainRandomNumber = numbers.includes(randomNumber);

    if (isContainRandomNumber === false) numbers.push(randomNumber);
  }

  console.log("computerInputNumbers :", Number(numbers.join("")));
  return Number(numbers.join(""));
};

export default getComputerInputNumbers;
