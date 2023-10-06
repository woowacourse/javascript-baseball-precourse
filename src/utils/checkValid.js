export const isEmptyValue = (userInput) => {
  return userInput === '';
};

export const isNotNumber = (userInput) => {
  return userInput.match(/\D/);
};

export const isNotThreeDigit = (userInput) => {
  return userInput.length !== 3;
};

export const isWithZero = (userInput) => {
  return userInput.match(/0/);
};

export const isNotValidNumberRange = (userInput) => {
  return isWithZero(userInput) || isNotNumber(userInput);
};

export const isDuplicatedNumber = (userInput) => {
  const userInputNumberSet = new Set(userInput);
  return userInputNumberSet.size !== userInput.length
};
