const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getDifferentRandomNumbers = (minDigit, maxDigit, digitCount) => {
  const numbers = [];
  while (numbers.length !== digitCount) {
    const randomNumber = getRandomNumber(minDigit, maxDigit);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return parseInt(numbers.join(''), 10);
};

export default getDifferentRandomNumbers;
