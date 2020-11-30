import { NUMBERS_LENGTH, NUMBER_CANDIDATES } from '../constants/configuration.js';

const isAllValidNumber = (numbers) => {
  let isValid = true;
  const numbersList = numbers.split('');
  const numberCandidatesList = NUMBER_CANDIDATES.split(' ');
  for (let number of numbersList) {
    if (!numberCandidatesList.includes(number)) {
      isValid = false;
      break;
    }
  }

  return isValid;
}

const isAllDifferentNumber = (numbers) => {
  const nonRedundantNumbersSet = new Set(numbers);
  
  return numbers.length === nonRedundantNumbersSet.size;
};

export const checkInputNumbers = (inputNumbers) => {
  let isValid = true;
  if (typeof inputNumbers !== 'string') {
    inputNumbers = String(inputNumbers);
  }
  if (
    inputNumbers.length !== NUMBERS_LENGTH ||
    !isAllDifferentNumber(inputNumbers) ||
    !isAllValidNumber(inputNumbers)
  ) {
    isValid = false;
  }

  return isValid;
}