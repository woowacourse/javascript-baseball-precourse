export const isNotThreeDigit = (num) => {
  return num.length !== BASEBALL_NUMBER_LENGTH;
};

export const isWithZero = (num) => {
  return num.match(/0/);
};

export const isInvalidNumber = (num) => {
  return num.match(/\D/);
};

export const isDuplicatedNumber = (num) => {
  const checkDuplicateNumberSet = new Set(num);

  return checkDuplicateNumberSet.size !== BASEBALL_NUMBER_LENGTH;
};
