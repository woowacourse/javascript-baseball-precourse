export const isNumber = (value) => {
  return !isNaN(value);
};

export const isNotDuplicateExist = (value) => {
  const numsExist = new Set();
  const valueArray = Array.from(String(value));
  for (const [idx, char] of valueArray.entries()) {
    const res = idx && numsExist.has(char);
    if (!!res) return false;
    numsExist.add(char);
  }
  return true;
};

export const isLengthThree = (value) => {
  return value.toString().length === 3;
};
