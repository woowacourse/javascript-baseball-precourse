export const pickUniqueThreeNumbers = () => {
  const numberSet = new Set();
  while (numberSet.size !== 3) {
    numberSet.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return Array.from(numberSet);
};

export const changeStringToNumberArray = (string) => {
  return string.split('').map(item => Number(item));
};

export const validateUniqueInArray = (array) => {
  const set = new Set();
  array.map((item) => set.add(item));
  return set.size === 3 ? true : false;
};

export const validateNumberInArray = (array) => {
  const isNumberArray = array.map((item) => isNaN(item));
  return isNumberArray.includes(true) ? false : true;
};
