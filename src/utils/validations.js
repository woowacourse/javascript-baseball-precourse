export const isValidInputData = (data) => {
  if (isNaN(data)) {
    return false;
  }

  const numbers = new Set(data.split(''));
  if (numbers.size !== 3) {
    return false;
  }

  return true;
};
